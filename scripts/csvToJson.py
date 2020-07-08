"""
Convert csv to json
Example csv:
filename, title, price, description
postcard1, ashe, 9.99, first postcard
postcard2, morgana, 3.49, second postcard
postcard3, miss fortune, 4.29, third postcard

output:
{
    "postcard1":
        {"title": "ashe",
        "price": 9.99,
        "description": "first postcard"
        },
    "postcard2":
        {"title": "morgana",
        "price": 3.49, "description":
        "second postcard"
        },
    "postcard3":
        {"title": "miss fortune",
        "price": 4.29,
        "description": "third postcard"}
}

"""



import json
from os.path import abspath, dirname, join

csvFile = join(dirname(abspath(__file__)), "itemsinfo.csv")
jsonFile = join(dirname(dirname(abspath(__file__))), "src/itemsinfo.json")

index = {}

with open(csvFile, 'rt') as csv:
    firstline = csv.readline()
    line = csv.readline()
    while line != "":
        line = line.split("\n")[0] #get ride of \n
        filename, title, price, description = line.split(",")
        filename = filename.strip().split(".")[0]
        title = title.strip()
        price = float(price.strip())
        description = description.strip()

        itemInfo = {
            "title":title,
            "price":price,
            "description":description
        }

        index[filename] = itemInfo

        line = csv.readline()

with open(jsonFile, 'wt') as output:
    json.dump(index, output)
