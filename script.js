// Fonction 1 : Générer un tableau à partir des données du formulaire
function generateBaZiTableFromInput() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const hour = document.getElementById('hour').value;

    if (!day || !month || !year || !hour) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Exemple de données simulées basées sur les saisies
    const mockDataFromInput = [
        {
            type: "Tronc céleste",
            hour: { value: "丁 (Ding)", icon: "assets/images/ding.png" },
            day: { value: "丙 (Bing)", icon: "assets/images/bing.png" },
            month: { value: "乙 (Yi)", icon: "assets/images/yi.png" },
            year: { value: "甲 (Jia)", icon: "assets/images/jia.png" }
        },
        {
            type: "Branche terrestre",
            hour: { value: "卯 (Mao)", icon: "assets/images/mao.png" },
            day: { value: "寅 (Yin)", icon: "assets/images/yin.png" },
            month: { value: "丑 (Chou)", icon: "assets/images/chou.png" },
            year: { value: "子 (Zi)", icon: "assets/images/zi.png" }
        },
        {
            type: "Élément associé",
            hour: { value: "Métal", icon: "assets/images/metal.png" },
            day: { value: "Feu", icon: "assets/images/fire.png" },
            month: { value: "Terre", icon: "assets/images/earth.png" },
            year: { value: "Bois", icon: "assets/images/wood.png" }
        }
    ];

    generateBaZiTableFromJSON(mockDataFromInput);
}

// Fonction 2 : Charger les données JSON et générer le tableau
function loadJSONAndGenerateTable() {
    fetch('assets/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Données JSON chargées :', data); // Debug
            generateBaZiTableFromJSON(data.pillars);
        })
        .catch(error => {
            console.error('Erreur lors du chargement du fichier JSON :', error);
        });
}

// Fonction commune pour générer un tableau à partir de données JSON
function generateBaZiTableFromJSON(data) {
    const tbody = document.getElementById('baziTableBody');
    tbody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        // Ajouter la colonne de type
        const tdType = document.createElement('td');
        tdType.textContent = row.type;
        tr.appendChild(tdType);

        // Ajouter les colonnes pour Heure, Jour, Mois, Année
        ['hour', 'day', 'month', 'year'].forEach(key => {
            const tdValue = document.createElement('td');

            // Ajouter l'image et le texte
            const img = document.createElement('img');
            img.src = row[key].icon;
            img.alt = row[key].value;
            img.style.width = '30px';
            img.style.marginRight = '10px';

            tdValue.appendChild(img);
            tdValue.appendChild(document.createTextNode(row[key].value));
            tr.appendChild(tdValue);
        });

        tbody.appendChild(tr);
    });

    document.getElementById('result').style.display = 'block';
}
function generateBaZiTableFromInput() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const hour = document.getElementById('hour').value;

    if (!day || !month || !year || !hour) {
        alert('Veuillez sélectionner tous les champs.');
        return;
    }

    // Exemple de données simulées
    const mockDataFromInput = [
        {
            type: "Tronc céleste",
            hour: { value: "丁 (Ding)", icon: "assets/images/ding.png" },
            day: { value: "丙 (Bing)", icon: "assets/images/bing.png" },
            month: { value: "乙 (Yi)", icon: "assets/images/yi.png" },
            year: { value: "甲 (Jia)", icon: "assets/images/jia.png" }
        },
        {
            type: "Branche terrestre",
            hour: { value: "卯 (Mao)", icon: "assets/images/mao.png" },
            day: { value: "寅 (Yin)", icon: "assets/images/yin.png" },
            month: { value: "丑 (Chou)", icon: "assets/images/chou.png" },
            year: { value: "子 (Zi)", icon: "assets/images/zi.png" }
        },
        {
            type: "Élément associé",
            hour: { value: "Métal", icon: "assets/images/metal.png" },
            day: { value: "Feu", icon: "assets/images/fire.png" },
            month: { value: "Terre", icon: "assets/images/earth.png" },
            year: { value: "Bois", icon: "assets/images/wood.png" }
        }
    ];

    generateBaZiTableFromJSON(mockDataFromInput);
}
