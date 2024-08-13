import json

# Chemin d'entrée et de sortie
input_file = 'equipement.json'
output_file = 'list_equipement.json'

# Initialisation de la liste des équipements
equipement_list = []

# Fonction pour regrouper les lignes en équipements
def parse_equipment(lines):
    equipement = {}
    name_lines = []
    description_lines = []
    effect_lines = []
    location_lines = []
    price_lines = []
    
    # Regrouper les lignes en fonction de leur contenu
    for line in lines:
        if line.startswith('$'):
            # Ligne de prix
            if price_lines:
                # Si nous avons déjà des lignes de prix, créer un équipement
                equipement['Buy Price'] = price_lines[0] if len(price_lines) > 0 else "N/A"
                equipement['Sell Price'] = price_lines[1] if len(price_lines) > 1 else "N/A"
                equipement_list.append(equipement)
                equipement = {}
                name_lines = []
                description_lines = []
                effect_lines = []
                location_lines = []
                price_lines = []
            price_lines.append(line.strip())
        elif line.startswith('Find Gnomey!') or line.startswith('Memory Store') or line.startswith('Officially Official!'):
            # Ligne de location ou autre
            if location_lines:
                equipement['Location'] = ' '.join(location_lines)
                location_lines = []
            location_lines.append(line.strip())
        elif line.startswith('STR') or line.startswith('$'):
            # Ligne d'effet
            if effect_lines:
                equipement['Effect'] = ' '.join(effect_lines)
                effect_lines = []
            effect_lines.append(line.strip())
        else:
            if name_lines:
                equipement['Name'] = ' '.join(name_lines)
                name_lines = []
            if description_lines:
                equipement['Description'] = ' '.join(description_lines)
                description_lines = []
            name_lines.append(line.strip())
    
    # Ajouter le dernier équipement s'il existe
    if name_lines or description_lines or effect_lines or location_lines or price_lines:
        if name_lines:
            equipement['Name'] = ' '.join(name_lines)
        if description_lines:
            equipement['Description'] = ' '.join(description_lines)
        if effect_lines:
            equipement['Effect'] = ' '.join(effect_lines)
        if location_lines:
            equipement['Location'] = ' '.join(location_lines)
        if price_lines:
            equipement['Buy Price'] = price_lines[0] if len(price_lines) > 0 else "N/A"
            equipement['Sell Price'] = price_lines[1] if len(price_lines) > 1 else "N/A"
        equipement_list.append(equipement)

# Lecture du fichier d'entrée
with open(input_file, 'r', encoding='utf-8') as f:
    lines = [line.strip() for line in f.readlines() if line.strip()]

# Traiter les lignes pour créer des équipements
parse_equipment(lines)

# Écriture du fichier JSON
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(equipement_list, f, ensure_ascii=False, indent=4)

print(f'Fichier {output_file} créé avec succès.')
