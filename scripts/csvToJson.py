"""
Convert csv to json
Example csv:
filename, title, price, description
postcard1, first, 9.99, first postcard
postcard2, second, 3.49, second postcard
postcard3, third, 4.29, third postcard

output:
[
    {"filename":"postcard1":
    "title": "first",
    "price": 9.99,
    "description": "first postcard"
    },
    ...
]

"""



import json
from os.path import abspath, dirname, join

csvFile = join(dirname(abspath(__file__)), "itemsInfo.csv")
jsonFile = join(dirname(dirname(abspath(__file__))), "src/itemsinfo.json")
URL_base = "https://storage.googleapis.com/steeplehill"

index = {}

with open(csvFile, 'rt') as csv:
    firstline = csv.readline()
    line = csv.readline()
    while line != "":
        line = line.split("\n")[0] #get ride of \n
        filename, category, title, price, description, *details = line.split(",")
        filename = filename.strip()
        print(filename)
        title = title.strip()
        price = float(price.strip())
        description = description.strip()
        category = category.strip()
        url = "/".join([URL_base, category, filename])

        itemInfo = {
            "title":title,
            "price":price,
            "description":description,
            "category":category,
            'url':url
        }

        index[filename] = itemInfo

        line = csv.readline()

with open(jsonFile, 'wt') as output:
    json.dump(index, output)
