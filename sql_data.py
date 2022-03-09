#import dependencies
from sqlalchemy import create_engine
import pandas as pd
import json

#begin our function
def query():
    #make db connection
    database_path ="resources/survivalprediction.sqllite"
    engine = create_engine(f"sqlite:///{database_path}")
    #query db
    query = """Select distinct * from prediction"""
    cursor = engine.execute(query)
    all_data = cursor.all()
    #create df from result
    all_df = pd.DataFrame(all_data)
    all_df.columns = all_data[0].keys()
    clean_all_df = all_df.drop(["Age", "Primary_Key"], axis=1)
    #create iterative objects with only unique values
    Cancer_Stage = clean_all_df["Cancer_Stage"].drop_duplicates()
    Gender = clean_all_df["Gender"].drop_duplicates()
    Cancer_Site = clean_all_df["Cancer_Site"].drop_duplicates()
    Race = clean_all_df["Race"].drop_duplicates()
    Median_Household_Income = clean_all_df["Median_Household_Income"].drop_duplicates()
    Cancer_Type = clean_all_df["Cancer_Type"].drop_duplicates()
    #create lists to store unique values
    site=[]
    ctype=[]
    stage=[]
    gender=[]
    race=[]
    income=[]
    #iterate through the objects
    for row in Cancer_Site:
        if row not in site:
            site.append(row)
    for row in Cancer_Stage:
        if row not in stage:
            stage.append(row)
    for row in Cancer_Type:
        if row not in ctype:
            ctype.append(row)
    for row in Gender:
        if row not in gender:
            gender.append(row)
    for row in Race:
        if row not in race:
            race.append(row)
    for row in Median_Household_Income:
        if row not in income:
            income.append(row)
    #create a dictionary to hold our lists
    clean_dict = {"stage":stage, "gender":gender, "site":site, "ethnicity":race, "income":income, "type":ctype}
    #jsonify the dictionary
    sql_json = json.dumps(clean_dict)
    
    #end our function
    return sql_json