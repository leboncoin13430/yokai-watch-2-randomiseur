import json

# Chemin d'entrée et de sortie
input_file = 'yokai.json'
output_file = 'list_yokai.json'

# Initialisation de la liste des yokai
yokai_list = []

# Lecture du fichier d'entrée
with open(input_file, 'r', encoding='utf-8') as f:
    for line in f:
        # On suppose que les éléments sont séparés par une tabulation
        fields = line.strip().split('\t')

        # Création d'un dictionnaire pour chaque yokai
        yokai = {
            "id": fields[0],
            "name_fr": fields[1],
            "name_en": fields[2],
            "rank": fields[3].replace('Rank ', ''),  # Supprimer le mot 'Rank' pour ne garder que la lettre
            "tribe": fields[4].replace(' Tribe', ''),  # Supprimer le mot 'Tribe'
            "element": fields[5].replace(' icon', ''),  # Supprimer le mot 'icon'
            "role": fields[6],
            "favorite_food": fields[7]
        }

        # Ajout du yokai à la liste
        yokai_list.append(yokai)

# Écriture du fichier JSON
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(yokai_list, f, ensure_ascii=False, indent=4)

print(f'Fichier {output_file} créé avec succès.')
