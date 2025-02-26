import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGears} from "@fortawesome/free-solid-svg-icons";

const ServiceDepannage = () => {

    const [modalHTML, setModalHTML] = useState({
        titre: '',
        description: ''
    })

    const datas = [
        {
            id: 1,
            titre: 'Diagnostics',
            donnees: [
                {
                    id: '1.1',
                    titre: 'Diagnostic complet d\'un Ordinateur Tour sur-mesure',
                    description: "                   <ul><li>Recherche de panne matériel et/ou logiciel sous 11 points de contrôle</li><li>Devis de réparation</li>\n" +
                        " <li>+ « Service+ intervention Express sous 72H » possible pour seulement 25€ de plus</li></ul>\n" +
                        "<br/>\n" +
                        "<p>Boitier - [Montage, Cablage] - Carte mère - Processeur - Mémoire vive - BIOS - Disque - Alimentation - [Carte graphique.Cartes contrôleur] - Refroidissement - [Système d‘exploitation.Logiciels]</p>",
                    valeur: '50€'
                },
                {
                    id: '1.2',
                    titre: 'Diagnostic complet d\'un Ordinateur Portable',
                    description: "                   <ul><li>Recherche de panne matériel et/ou logiciel sous 8 points de contrôle</li><li>Devis de réparation</li>\n" +
                        " <li>+ « Service+ intervention Express sous 72H » possible pour seulement 25€ de plus</li></ul>\n" +
                        "<br/>\n" +
                        "<p>[Châssis.Écran.Charnières] - [Carte mère.Processeur.Carte graphique] - Mémoire vive - BIOS - Disque - Batterie - Refroidissement - [Système d’exploitation.Logiciels]</p>",
                    valeur: '35€'
                },
                {
                    id: '1.3',
                    titre: 'Diagnostic complet d’un Ordinateur Constructeur (Tour , mini-Tour ou Tout-en-Un)',
                    description: "<ul><li>Recherche de panne matériel et/ou logiciel sous 7 points de contrôle</li><li>Devis de réparation</li>\n" +
                        " <li>+ « Service+ intervention Express sous 72H » possible pour seulement 25€ de plus</li></ul>\n" +
                        "<br/>\n" +
                        "<p>Boîtier/Châssis - [Carte mère.Processeur.Carte graphique] Refroidissement - Mémoire vive - BIOS - Disque - Alimentation - [Système d’exploitation.Logiciels]</p>",
                    valeur: '30€',
                },
                {
                    id: '1.4',
                    titre: 'Diagnostic rapide d’un Ordinateur (tous modèles) / quelques Appareils électroniques',
                    description: "<ul><li>Recherche de panne matériel et/ou logiciel sous 5 points de contrôle maximum (points jugés cohérents en fonction du ou des symptômes décrits)</li>\n" +
                        "<li>Devis de réparation!</li></ul>\n" +
                        "<br/><p>+ « Service+ intervention immédiate » possible pour seulement 5€ de plus</p>",
                    valeur: '15€',
                },
                {
                    id: '1.5',
                    titre: 'Diagnostic rapide d’un seul composant seul',
                    description: "<ul><li>Recherche de panne matériel uniquement, sur un seul composant maximum (Carte mère, ou Processeur, ou Alimentation, ou Mémoire vive, ou\n" +
                        "Disque, ou Carte Graphique, etc...)</li>\n" +
                        "<li>Devis de réparation!</li></ul>\n" +
                        "<br/><p>+ « Service+ intervention immédiate » possible pour seulement 5€ de plus</p>",
                    valeur: '5€',
                }
            ]
        },
        {
            id: 2,
            titre: 'Réparations',
            donnees: [
                {
                    id: '2.1',
                    titre: 'Changement de dalle ou de clavier sur un ordinateur portable',
                    description: "<ul><li>Remplacement classique (facile d'accès) par un modèle de même caractéristiques, reconditionné ou neuf au choix</li>\n" +
                        "<li>+ « Service+ intervention immédiate » possible pour seulement 5€ de plus</li>\n" +
                        "<li>[« Service+ intervention COMPLEXE » à 25€ ajouté si obligation de démontage complet de la coque inférieure du PC portable]</li>\n" +
                        "</ul>",
                    valeur: '25€'
                },
                {
                    id: '2.2',
                    titre: 'Changement de batterie / ventilateur / d’un connecteur de charge d’un ordinateur portable',
                    description: "<ul><li>Remplacement par une batterie identique, Constructeur ou Générique, présente sous la coque de l'ordinateur</li>\n" +
                        "<li>OU Remplacement du ventilateur interne par le même modèle neuf ou reconditionné au choix, présent sous la coque de l'ordinateur</li>\n" +
                        "<li>OU Remplacement du connecteur interne non-soudé par le même modèle neuf ou reconditionné au choix, présent sous la coque de l'ordinateur</li>\n" +
                        "<li>Comprend le démontage et le remontage complet de la coque</li>\n" +
                        "<li>+ « Service+ intervention Express sous 72H » possible pour seulement 25€ de plus</li>\n" +
                        "</ul>",
                    valeur: '35€'
                },
                {
                    id: '2.3',
                    titre: 'Remplacement d’une seule coque d’un ordinateur portable',
                    description: "<ul><li>Remplacement de la coque inférieure ou de la coque écran par le même modèle, neuf ou reconditionné au choix</li>\n" +
                        "<li>+ « Service+ intervention Express sous 72H » possible pour seulement 25€ de plus</li>\n" +
                        "</ul>",
                    valeur: '30€'
                },
                {
                    id: '2.4',
                    titre: 'Réparation d\'un composant diagnostiqué défectueux',
                    description: "<ul><li>Sur ces composants : Carte mère, Mémoire vive, Carte Graphique, Disques, Alimentation</li>\n" +
                        "<li>+ « Service+ intervention Express sous 72H » possible pour seulement 25€ de plus</li>\n" +
                        "</ul>",
                    valeur: '50€'
                },
                {
                    id: '2.5',
                    titre: 'Micro-soudure d\'un composant',
                    description: "<ul><li>Remplacement ou ajout d’un composant électronique par micro-soudure (ex. le connecteur de charge soudé d’origine d’un ordinateur portable</li>\n" +
                        "<li>+ « Service+ intervention Express sous 72H » possible pour seulement 25€ de plus</li>\n" +
                        "</ul>",
                    valeur: '40€'
                },
                {
                    id: '2.6',
                    titre: '1/2 Heure de main d\'œuvre',
                    description: "<ul><li>Réparations sur Téléphone ou Tablette ou Console</li>\n" +
                        "<li>OU Problème matériel/logiciel nécessitant un temps de traitement anormalement long</li>\n" +
                        "<li>OU multiplication d’une même prestation</li>\n" +
                        "<li>OU pour l’ouverture de la coque d’un ordinateur portable pour micro-soudure du connecteur de charge</li>\n" +
                        "<li>+ « Service+ intervention immédiate » possible dans certains cas pour juste 5€ de plus</li>\n" +
                        "<li>OU « Service+ intervention Express sous 72H » possible pour d’autres cas pour seulement 25€ de plus</li>\n" +
                        "</ul>",
                    valeur: '30'
                },
                {
                    id: '2.7',
                    titre: '1 Heure de main d\'œuvre',
                    description: "<ul><li>Réparations sur Téléphone ou Tablette ou Console</li>\n" +
                        "<li>OU Problème matériel/logiciel nécessitant un temps de traitement anormalement long</li>\n" +
                        "<li>OU multiplication d’une même prestation</li>\n" +
                        "<li>OU pour l’ouverture de la coque d’un ordinateur portable pour micro-soudure du connecteur de charge</li>\n" +
                        "<li>+ « Service+ intervention immédiate » possible dans certains cas pour juste 5€ de plus</li>\n" +
                        "<li>OU « Service+ intervention Express sous 72H » possible pour d’autres cas pour seulement 25€ de plus</li>\n" +
                        "</ul>",
                    valeur: '50€'
                }
            ]
        },
        {
            id: 3,
            titre: 'Traitement logiciel',
            donnees: [
                {
                    id: '3.1',
                    titre: 'Installation d’un système d’exploitation (S.E ou O.S)',
                    description: "<ul><li>Uniquement un système maintenu à jour par leurs développeurs !</li>\n" +
                        "<li>Au choix : Windows, Linux, etc...</li>\n" +
                        "<li>Installation des pilotes et des dernières mises à jour du système.</li>\n" +
                        "<li>[Pour Windows, l’activation de la licence reste à la charge du client !]</li>\n" +
                        "<li>[Pour Linux, la Distribution Linux Mint sera proposée par défaut]</li>\n" +
                        "<li>+ « Service+ intervention immédiate » possible pour seulement 5€ de plus</li>\n" +
                        "</ul>",
                    valeur: '30€'
                },
                {
                    id: '3.2',
                    titre: 'Installation d’un seul logiciel',
                    description: "<ul><li>Gratuit / payant / libre / propriétaire (Ne nécessitant pas la création ou la connexion à un compte utilisateur nouveau ou existant)</li>\n" +
                        "<li>[« Service+ intervention COMPLEXE » à 25€ ajouté pour tout logiciel sous licence et/ou nécessitant la création ou la connexion à un compte utilisateur nouveau ou existant\n" +
                        "(Microsoft Pack Office, tout Antivirus payant, suite Adobe, etc...)]</li>\n" +
                        "<li>+ « Service+ intervention immédiate » possible dans les 2 cas pour juste 5€ de plus</li>\n" +
                        "</ul>",
                    valeur: '5€'
                },
                {
                    id: '3.3',
                    titre: 'Mise en service initiale',
                    description: "<ul><li>Premier démarrage d’un ordinateur neuf pour création de session Utilisateur</li>\n" +
                        "<li>Installation des mises à jour système et des pilotes composants si besoin</li>\n" +
                        "<li>OU installation matériel et logiciel d’un périphérique (ex. imprimante, NAS) + test rapide.</li>\n" +
                        "<li>+ « Service+ intervention immédiate » possible pour seulement 5€ de plus</li>\n" +
                        "<li>[Activation Windows si preuve d’une licence officielle et si souhaitée]</li>\n" +
                        "</ul>",
                    valeur: '15€'
                },
                {
                    id: '3.4',
                    titre: 'Mise à jour / Paramétrage du micrologiciel (BIOS/UEFI) d’une carte mère',
                    description: "<ul><li>Mise à jour ou Flash arrière vers la dernière version stable du micrologiciel de la carte mère.</li>\n" +
                        "<li>OU Paramétrage du micrologiciel de la carte mère pour optimisation des performances des composants installés</li>\n" +
                        "<li>Sauvegarde d’un profil nommé « SerreVis »</li>\n" +
                        "<li>+ « Service+ intervention immédiate » possible pour seulement 5€ de plus</li>\n" +
                        "<li>[Si prestation incluse dans un Montage, elle sera offerte par la suite pendant 1 an]</li>\n" +
                        "<li>!!!!! PAS d’Overclocking !!!!!</li>\n" +
                        "</ul>",
                    valeur: '10€'
                },
                {
                    id: '3.5',
                    titre: 'Mise à niveau d’un système d’exploitation',
                    description: "<ul><li>Mise à niveau vers une version plus récente de votre système d'exploitation</li>\n" +
                        "<li>Conservation ou non des données Utilisateur au choix</li>\n" +
                        "<li>+ « Service+ intervention immédiate » possible pour seulement 5€ de plus</li>\n" +
                        "<li>S.E au choix : Windows, Linux, etc...</li>\n" +
                        "<li>Mises à jour des pilotes et du système si nécessaire</li>\n" +
                        "</ul>",
                    valeur: '25€'
                },
                {
                    id: '3.6',
                    titre: 'Restauration d’un système d’exploitation',
                    description: "<ul><li>Restauration vers un point antérieur stable de votre système d'exploitation :</li>\n" +
                        "<li>Conservation ou non des données Utilisateur au choix</li>\n" +
                        "<li>+ « Service+ intervention immédiate » possible pour seulement 5€ de plus</li>\n" +
                        "<li>S.E au choix : Windows, Linux, etc...</li>\n" +
                        "<li>Mises à jour des pilotes et du système si nécessaire</li>\n" +
                        "</ul>",
                    valeur: '30€'
                },
            ]
        },
        {
            id: 4,
            titre: 'Montages de composants',
            donnees: [
                {
                    id: '4.1',
                    titre: 'Montage seul d’un Ordinateur Tour complet',
                    description: "<ul><li>Assemblage SUR-MESURE des différents composants d’un ordinateur tour</li>\n" +
                        "<li>Batterie de tests de stabilité effectuée</li>\n" +
                        "<li>[« Service+ intervention COMPLEXE » à 25€ ajouté si le montage comprend un refroidissement par Watercooling AIO ou des systèmes de LEDs RGB]</li>\n" +
                        "<li>+ « Service+ intervention Express sous 72H » possible pour seulement 25€ de plus</li>\n" +
                        "<li>Cette prestation N’INCLUT PAS les MàJ et Paramétrage du micrologiciel (BIOS / UEFI) de la carte mère, ni l'installation d’un système d’exploitation (S.E / O.S)</li>\n" +
                        "</ul>",
                    valeur: '55€'
                },
                {
                    id: '4.2',
                    titre: 'Démontage / Remontage seul d\'un Ordinateur Tour sur-mesure',
                    description: "<ul><li>Démontage des composants d’un Ordinateur Tour sur-mesure pour Remontage dans un nouveau boîtier ou dans le même boîtier</li>\n" +
                        "<li>Batterie de tests de stabilité effectuée</li>\n" +
                        "<li>!!!!! Cette prestation N’INCLUT PAS les MàJ et Paramétrage du micrologiciel (BIOS/ UEFI) de la carte mère, ni l’installation d’un système d’exploitation!!!!</li>\n" +
                        "<li>[« Service+ intervention COMPLEXE » à 25€ ajouté si le montage comprend un refroidissement par Watercooling AIO ou des systèmes de LEDs RGB]</li>\n" +
                        "<li>+ « Service+ intervention Express sous 72H » possible pour seulement 25€ de plus</li>\n" +
                        "</ul>",
                    valeur: '80€'
                },
                {
                    id: '4.3',
                    titre: 'Installation ou Retrait d’un seul composant',
                    description: "<ul><li>Installation, remplacement ou Retrait d’un composant facile d’accès (Mémoire vive / Disque / Carte graphique / Lecteur / Carte contrôleur)</li>\n" +
                        "<li>Test rapide de fonctionnement et si nécessaire installation du pilote sous Windows</li>\n" +
                        "<li>[« Service+ intervention COMPLEXE » à 25€ ajouté pour l’installation d’une carte mère / d’un processeur / d’un refroidissement par Watercooling AIO / d’une alimentation / ou si un\n" +
                        "démontage matériel préalable est nécessaire (ex. Châssis/Coques Ordinateur portable, etc...)]</li>\n" +
                        "<li>+ « Service+ intervention immédiate » possible pour seulement 5€ de plus</li>\n" +
                        "</ul>",
                    valeur: '10€'
                },
            ]
        },
        {
            id: 5,
            titre: 'Entretenir son matériel',
            donnees: [
                {
                    id: '5.1',
                    titre: 'Dépoussiérage classique d\'un Ordinateur (tous modèles) / Appareil électronique léger',
                    description: "<ul><li>Nettoyage léger interne et/ou externe (Utilisation d’une soufflette reliée à un compresseur d’air + chiffons + spray)</li>\n" +
                        "<li>[« Service+ intervention COMPLEXE » à 25€ ajouté si Ordinateur Tour très poussiéreux OU pour pont thermique d’un Ordinateur Tour]</li>\n" +
                        "<li>+ « Service+ intervention immédiate » possible pour seulement 5€ de plus</li>\n" +
                        "</ul>",
                    valeur: '15€'
                },
                {
                    id: '5.2',
                    titre: 'Dépoussiérage complet d\'un Ordinateur Portable',
                    description: "<ul><li>Démontage de la coque inférieure pour nettoyage interne complet (Utilisation d’une soufflette reliée à un compresseur d’air + chiffons + spray)</li>\n" +
                        "<li>Changement de la pâte thermique</li>\n" +
                        "<li>Nettoyage des coques et de l’écran</li>\n" +
                        "<li>+ « Service+ intervention sous 72H » possible pour seulement 25€ de plus</li>\n" +
                        "</ul>",
                    valeur: '50€'
                },
                {
                    id: '5.3',
                    titre: 'Désinfection contre les Virus',
                    description: "<ul><li>Nettoyage logiciel d’un système d’exploitation Windows à l’aide de logiciels de désinfection antivirus, antimalware, antiadware, antispyware.</li>\n" +
                        "<li>+ « Service+ intervention sous 72H » possible pour seulement 25€ de plus</li>\n" +
                        "</ul>",
                    valeur: '70€'
                },
                {
                    id: '5.4',
                    titre: '(Re)Câblage d\'un Ordinateur Tour sur-mesure',
                    description: "<ul><li>(Ré)Organisation des câbles de l’alimentation vers les composants pour optimisation de l'espace d'accès et du flux d'air</li>\n" +
                        "<li>+ « Service+ intervention immédiate » possible pour seulement 5€ de plus</li>\n" +
                        "<li>[« Service+ intervention COMPLEXE » à 25€ ajouté si le montage comprend un refroidissement par Watercooling AIO ou des systèmes de LEDs RGB]</li>\n" +
                        "</ul>",
                    valeur: '25€'
                },
                {
                    id: '5.5',
                    titre: 'Nettoyage du système d\'exploitation',
                    description: "<ul><li>Suppression des fichiers et logiciels inutiles et encombrant pour libérer de la place sur le disque dur et accélérer l'utilisation de l'ordinateur.</li>\n" +
                        "<li>+ « Service+ intervention sous 72H » possible pour seulement 25€ de plus</li>\n" +
                        "</ul>",
                    valeur: '25€'
                },
            ]
        },
        {
            id: 6,
            titre: 'Traitement des données',
            donnees: [
                {
                    id: '6.1',
                    titre: 'Sauvegarde et/ou transfert de données',
                    description: "<ul><li>Si disque d’origine reconnu et sans secteurs défectueux, non effacé, non formaté !</li>\n" +
                        "<li>Sauvegarde du dossier personnel de l’utilisateur (Documents, Photos, etc...)</li>\n" +
                        "<li>[Logiciels installés et Support récepteur des données non-inclus]</li>\n" +
                        "<li>+ « Service+ intervention immédiate » possible pour seulement 5€ de plus</li>\n" +
                        "</ul>",
                    valeur: '25€'
                },
                {
                    id: '6.2',
                    titre: 'Clonage d’un disque système ou de données',
                    description: "<ul><li>Si disque d’origine reconnu et sans secteurs défectueux, non effacé, non formaté !</li>\n" +
                        "<li>Copie à l’identique d’un disque Système ou de Données</li>\n" +
                        "<li>[Support récepteur du clonage non-inclus]</li>\n" +
                        "<li>+ « Service+ intervention immédiate » possible pour seulement 5€ de plus</li>\n" +
                        "</ul>",
                    valeur: '35€'
                },
                {
                    id: '6.3',
                    titre: 'Récupération des données',
                    description: "<ul><li>Si disque d’origine reconnu ou non, effacé ou formaté mais sans réinscriptions - présence ou non de secteurs défectueux !</li>\n" +
                        "<li>Récupération du dossier personnel de l’utilisateur (Documents, Photos, etc...)</li>\n" +
                        "<li>!!!! Si le disque d’origine est endommagé, l’intervention nécessitera un temps de traitement plus long ! dans ce cas un temps de main d’œuvre sera facturé en plus !!!!</li>\n" +
                        "<li>[Logiciels installés et Support récepteur des données non-inclus]</li>\n" +
                        "</ul>",
                    valeur: '60€'
                },
            ]
        },
        {
            id: 7,
            titre: 'Services +',
            donnees: [
                {
                    id: '7.1',
                    titre: 'Service + intervention immédiate',
                    description: "<p>Permet de ne pas attendre le délai minimum de traitement d’une prestation simple et de passer devant celle(s) déjà en cours et/ou en attente pour\n" +
                        "être traité dans l’instant [voir descriptif des prestations si ajout possible ou demander directement au comptoir]</p>",
                    valeur: '5€'
                },
                {
                    id: '7.2',
                    titre: 'Service + intervention COMPLEXE',
                    description: "<p>S’ajoute à une prestation simple si le niveau de complexité est important et engendre un temps de traitement beaucoup plus long.\n" +
                        "[voir descriptif des prestations ou demander directement au comptoir]</p>",
                    valeur: '25€'
                },
                {
                    id: '7.3',
                    titre: 'Service + intervention express sous 72H',
                    description: "<p>Permet de ne pas attendre le délai minimum de traitement d’une prestation complexe et de passer devant celles déjà en cours et/ou en attente pour\n" +
                        " être traité dans les 72H [voir descriptif des prestations si ajout possible ou demander directement au comptoir]</p>",
                    valeur: '25€'
                },
                {
                    id: '7.4',
                    titre: 'Service+ “Apprendre à faire soi-même”',
                    description: "<p>Venez apprendre à faire par vous-même (sous instructions, assistance et conseils du Technicien) la prestation de service de votre choix, seul(e) ou en\n" +
                        "atelier de groupe.[Demander directement au comptoir]</p>",
                    valeur: 'sur devis'
                },
                {
                    id: '7.5',
                    titre: 'Renvoi d’un composant vers son constructeur',
                    description: "<p>Démarches auprès du constructeur pour effectuer un retour pour panne d’un produit ou composant sous garantie, puis expédition. Prise en charge\n" +
                        "des échanges avec le constructeur en cas de questions ou de devis de réparation pour compte-rendu au client</p>",
                    valeur: '20€'
                },
                {
                    id: '7.6',
                    titre: 'Assistance bureautique',
                    description: "<p>Que vous soyez un Particulier ou un Professionnel, pour vos tâches+\n" +
                        "bureautiques du quotidien ou exceptionnelles, l’Atelier propose une assistance pour :</p>+\n" +
                        "<ul><li>Vos démarches administratives (ex.les créations de compte en ligne : emploi, impôts, santé, retraite, ehpad, décès, etc...)</li>\n" +
                        "<li>Utiliser l’outil informatique (aller sur internet, lire ses courriels, visioconférence, etc...)</li>\n" +
                        "<li>Tableurs de gestion (facturation/caisse, compta, stock, statistiques, etc...)</li>\n" +
                        "<li>Documents texte administratifs,</li>\n" +
                        "<li>Travail graphique (logo, flyer, dépliant, plan d’aménagement 3D, etc...)</li>\n" +
                        "</ul>",
                    valeur: 'sur devis'
                },
                {
                    id: '7.7',
                    titre: 'Impression d\'un document / d\'une page - Couleur ou N/B',
                    description: "<p>Tarif unique</p>",
                    valeur: '0.20€'
                }
            ]
        },
    ]

    const showModal = (e) => {
        e.preventDefault()
        const dialog = document.getElementById('diagnostic-modal');

        const title = e.currentTarget.getAttribute('data-title')
        const id = e.currentTarget.getAttribute('data-id')
        const d1 = datas.filter(f => f.titre === title)[0]
        const d2 = d1.donnees.filter(f => f.id === id)[0]

        document.getElementById('diagnostic-modal-description').innerHTML = d2.description

        setModalHTML(d2)

        dialog.showModal();
    }

    return (
        <div className={"w-full grid grid-cols-3 gap-4"}>
            {datas.map(d =>
                <div className="card bg-primary text-white m-4 basis-1/4 shadow-xl" key={d.id}>
                    <div className="card-body p-4">
                        <h2 className="card-title">{d.titre}</h2>
                        <ul className="w-full p-2 text-sm">
                            {d.donnees.map(dd =>
                                <li className={"flex justify-between py-1 border border-b-1 border-t-0 border-r-0 border-l-0 hover:font-bold hover:cursor-pointer"}
                                    key={dd.id}
                                    onClick={showModal}
                                    data-title={d.titre}
                                    data-id={dd.id}
                                >
                                    <span>{dd.titre}</span>
                                    <span>{dd.valeur}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            )}

            <dialog id={"diagnostic-modal"} className={"modal"}>
                <div className={"modal-box p-0 m-4 min-w-[50%] min-h-[50%]"}>
                    <div
                        className={"w-full p-2 bg-white border-solid border-t-0 border-l-0 border-r-0 border-2 border-slate-200 sticky top-0 z-100 font-bold"}>
                        <FontAwesomeIcon icon={faGears} className={"me-2"}></FontAwesomeIcon> {modalHTML.titre} : {modalHTML.valeur}
                    </div>

                    <div className={"py-4 px-8 text-justify"} id={"diagnostic-modal-description"}>
                        <p>Assemblage de composants, pièce par pièce, à l’intérieur d’un boîtier (Boîtier, alimentation,
                            carte mère, processeur, RAM, refroidisseur, disques, carte graphique, lecteurs et cartes
                            contrôleurs si besoin) Une fois le PC assemblé, un premier démarrage et une batterie de tests à
                            l’aide d’un disque contenant un système Windows de l’Atelier sera effectuée.</p>
                        <br/>
                        <p>Cette prestation n’inclut pas le Flash/BackFlash de BIOS / UEFI de la carte mère, ni l’installation du système
                            d’exploitation sur l’un des disques du PC assemblé</p>
                        <br/>
                        <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+ intervention sous 72H » à 25€.</p>
                        <br/>
                        <p>Si le montage comprend un refroidissement par Watercooling AIO ou des systèmes de L Ds RGB alors le montage devient complexe et nécessitera l'ajout de la prestation « Service+ intervention COMPLEXE » à 25€.</p>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default ServiceDepannage;