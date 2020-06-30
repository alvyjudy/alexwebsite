# python udpateIndex.py
import urllib.request
import xml.etree.ElementTree as ET
import json
from os.path import abspath, dirname, join

HOST = "https://storage.googleapis.com/steeplehill"

#contents = urllib.request.urlopen("https://storage.googleapis.com/steeplehill").read()
tree = ET.parse('xmlfile.xml')
root = tree.getroot()

contents = []
for child in root:
    if child.tag.endswith('Contents'):
        contents.append(child[0].text)

categories = []
for content in contents:
    if content.startswith("categories"):
        categories.append(content)

index = {}
index['categories'] = []
for category in categories:
    img_obj = {"name": None, 'url': None}
    category_name = category.split("/")[1].split(".")[0] #keychain
    index['categories'].append(category_name)
    index[category_name] = []

    for content in contents:
        if content.startswith(category_name):
            img_obj["name"] = content.split("/")[1].split(".")[0]
            img_obj["url"] = "/".join([HOST, content])
            index[category_name].append(img_obj)

index_path = join(dirname(dirname(abspath(__file__))), 'src/mediaIndex.json')



with open(index_path, 'wt') as output:
    json.dump(index, output)
