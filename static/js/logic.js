function desiredLogic() {

    // Once API is ready to call the data endpoint
    fetch("/data").then((response) => {
        return response.json();
    }).then((data) => {
        console.log("GET response:");
        var income = response.income;
        var gender = response.gender;
        var ethnicity = response.race;
        var stage = response.stage;
        var site = response.site;
        var type = response.ctype;

        // Select the form fields
        let income_select = d3.select("#income");
        let gender_select = d3.select("#gender");
        let ethnicity_select = d3.select("#ethnicity");
        let stage_select = d3.select("#stage");
        let site_select = d3.select("#site");
        let type_select = d3.select("#type");
    
        // Append the options to the select fields
        income.forEach(function (option) {
            income_select.append("option").text(option).property("value", option);
        })
        gender.forEach(function (option) {
            gender_select.append("option").text(option).property("value", option);
        })
        ethnicity.forEach(function (option) {
            ethnicity_select.append("option").text(option).property("value", option);
        })
        stage.forEach(function (option) {
            stage_select.append("option").text(option).property("value", option);
        })
        site.forEach(function (option) {
            site_select.append("option").text(option).property("value", option);
        })
        type.forEach(function (option) {
            type_select.append("option").text(option).property("value", option);
        })
    });
}

function alternateLogic() {

    // Hardcoding the lists
    let income = ['$75,000+','$65,000 - $69,999','$70,000 - $74,999','$60,000 - $64,999','$55,000 - $59,999','$40,000 - $44,999','$45,000 - $49,999','$50,000 - $54,999','$35,000 - $39,999','< $35,000','Unknown'];
    let gender = ["Male", "Female"];
    let ethnicity = ['Non-Hispanic White','Non-Hispanic Asian or Pacific Islander','Non-Hispanic Black','Hispanic (All Races)','Non-Hispanic American Indian/Alaska Native','Non-Hispanic Unknown Race'];
    let stage = ["I", "IIB", "IIA", "IA", "IIIB", "IV", "IIIC", "IIIA", "IIIC1", "III", "IB", "IEA", "OCCULT", "0a", "IVB", "IVA", "II", "INOS", "IIINOS", "IIIEA", "IIEA", "IVC", "IIC", "IE", "IIEB", "0is", "IINOS", "IB2", "IIIESB", "0", "IVNOS", "IIIC2", "ISA", "IIE", "IBNOS", "IA1", "IB1", "IC", "IIA2", "IIISA", "IIIE", "IEB", "IISA", "IIIEB", "IIESB", "IIISB", "IVA1", "IISB", "IA2", "IIIESA", "IIESA", "IS", "IIS", "IIANOS", "IVA2", "IIA1", "IIIS", "IANOS", "ISB", "IIES", "IIIES"];
    let site = ["Prostate", "Breast", "Bladder", "Rectum", "Lung", "Colon", "Melanoma", "SmallIntestine", "Corpus", "Stomach", "Kidney", "Thyroid", "Ovary", "Lymphoma", "SkinEyelid", "MF", "SoftTissue", "Vulva", "Urethra", "PancreasHead", "PancreasBodyTail", "Pleura", "BaseTongue", "Skin", "SupraLarynx", "OthPancreas", "Liver", "Anus", "GumUpper", "GumLower", "Oropharynx", "Esophagus", "AntTongue", "FOM", "ExtraHepaticDucts", "SoftPalate", "Gallbladder", "Peritoneum", "Ampulla", "Cervix", "FallopianTube", "ParotidGland", "Hypopharynx", "RenalPelvis", "GlotticLarynx", "Bone", "SubmandibularGland", "Vagina", "LipUpper", "NasalCavity", "MaxillarySinus", "Nasopharynx", "OthLarynx", "Penis", "LipLower", "BuccalMucosa", "MelanomaIrisCiliary", "Testis", "MelanomaChoroid", "OthGum", "HardPalate", "OthSalivary", "SubLarynx", "Scrotum", "OthMouth", "OthLip", "HemeRetic", "OthEndocrine", "AntEpiglottis", "EthmoidSinus", "HeartMediastinum", "Placenta", "OthPharynx"];
    let type = [" Adenomas And Adenocarcinomas", " Ductal And Lobular Neoplasms", " Transitional Cell Papillomas And Carcinomas", " Epithelial Neoplasms, Nos", " Nevi And Melanomas", " Acinar Cell Neoplasms", " Complex Mixed And Stromal Neoplasms", " Squamous Cell Neoplasms", " Cystic, Mucinous And Serous Neoplasms", " Nhl - Mature B-Cell Lymphomas", " Adnexal And Skin Appendage Neoplasms", " Nhl - Mature T And Nk-Cell Lymphomas", " Blood Vessel Tumors", " Soft Tissue Tumors And Sarcomas, Nos", " Complex Epithelial Neoplasms", " Mesothelial Neoplasms", " Unspecified Neoplasms", " Hodgkin Lymphomas", " Mucoepidermoid Neoplasms", " Nhl - Precursor Cell Lymphoblastic Lymphoma", " Lymphoid Leukemias (C42.1)", " Lipomatous Neoplasms", " Malignant Lymphomas, Nos Or Diffuse", " Miscellaneous Tumors", " Osseous And Chondromatous Neoplasms", " Myomatous Neoplasms", " Fibromatous Neoplasms", " Fibroepithelial Neoplasms", " Germ Cell Neoplasms", " Plasma Cell Tumors", " Synovial-Like Neoplasms", " Basal Cell Neoplasms", " Specialized Gonadal Neoplasms", " Miscellaneous Bone Tumors (C40._, C41._)", " Nerve Sheath Tumors", " Gliomas", " Neuroepitheliomatous Neoplasms", " Trophoblastic Neoplasms", " Granular Cell Tumors & Alveolar Soft Part Sarcoma", " Odontogenic Tumors (C41._)", " Myxomatous Neoplasms", " Lymphatic Vessel Tumors", " Giant Cell Tumors", " Mesonephromas"];

    // Select the form fields
    let income_select = d3.select("#income");
    let gender_select = d3.select("#gender");
    let ethnicity_select = d3.select("#ethnicity");
    let stage_select = d3.select("#stage");
    let site_select = d3.select("#site");
    let type_select = d3.select("#type");

    // Append the options to the select fields
    income.forEach(function (option) {
        income_select.append("option").text(option).property("value", option);
    })
    gender.forEach(function (option) {
        gender_select.append("option").text(option).property("value", option);
    })
    ethnicity.forEach(function (option) {
        ethnicity_select.append("option").text(option).property("value", option);
    })
    stage.forEach(function (option) {
        stage_select.append("option").text(option).property("value", option);
    })
    site.forEach(function (option) {
        site_select.append("option").text(option).property("value", option);
    })
    type.forEach(function (option) {
        type_select.append("option").text(option).property("value", option);
    })
}

// Initialize the function
alternateLogic();