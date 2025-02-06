import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGears, faXmark} from "@fortawesome/free-solid-svg-icons";

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
                    titre: 'Diagnostic complet d\'un PC Tour',
                    description: "                   <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '50€'
                },
                {
                    id: '1.2',
                    titre: 'Diagnostic complet d\'un PC portable',
                    description: "                   <p>Recherche de panne matériel uniquement, sur un seul composant maximum (Carte mère, ou Alim, ou RAM, ou Disque, ou Carte Graphique).</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Tests croisés possible mais court -> Devis de réparation. Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H pour 25€ en plus</p>",
                    valeur: '35€'
                },
                {
                    id: '1.3',
                    titre: 'Diagnostic rapide PCs/Smartphone/Tablette/Console',
                    description: "<p>Recherche de panne matériel ou logiciel, tests ciblés sur 4 ou 5 composants maximum,\n\" +" +
                        " tests croisés possible mais court <br/>-> Devis de réparation. Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "<br/><p>Possibilité d’intervention dans l’instant en rajoutant la prestation « Service+ intervention immédiate » à 5€</p>",
                    valeur: '15€',
                },
                {
                    id: '1.4',
                    titre: 'Diagnostic rapide d’un seul composant seul',
                    description: "<p>Recherche de panne matériel uniquement, sur un seul\n" +
                        "composant maximum (Carte mère, ou Alim, ou RAM, ou Disque, ou Carte Graphique).</p><br/><p>Tests croisés possible mais court\n" +
                        " -> Devis de réparation. Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "<p>Possibilité d’intervention dans l’instant en rajoutant la prestation « Service+ intervention immédiate » à 5€</p>",
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
                    titre: 'Changement de dalle de PC portable',
                    description: "                            <p>Démontage de la dalle (écran) d’un PC portable pour remplacement\n" +
                    "par un modèle de la même référence. Max 30min. Possibilité d’intervention dans l’instant en rajoutant la prestation\n" +
                    "« Service+ intervention immédiate » à 5€</p>\n" +
                    "                            <br/>\n" +
                    "<p>Si le changement de dalle nécessite un démontage complet de la coque inférieure du PC portable, alors la prestation de\n" +
                    "« Service+ intervention COMPLEXE » à 25€ devra être ajoutée au devis et facturée. Max 45min. Possibilité d’intervention\n" +
                    "    dans l’instant en rajoutant la prestation « Service+ intervention immédiate » à 5€</p>",
                    valeur: '25€'
                },
                {
                    id: '2.2',
                    titre: 'Changement de clavier de PC portable',
                    description: "                            <p>Démontage d’un clavier de PC portable pour remplacement par\n" +
                        "un modèle de la même référence. Max 30min. Possibilité d’intervention dans l’instant en rajoutant la prestation\n" +
                        "« Supplément d’intervention immédiate » à 5€</p>\n" +
                        "                            <br/>\n" +
                        "<p>Si le changement de clavier nécessite un démontage complet de la coque inférieure du PC portable, alors la prestation\n" +
                        "de « Service+ intervention COMPLEXE » à 25€ devra être ajoutée au devis et facturée. Max 45min. Possibilité\n" +
                        "d’intervention dans l’instant en rajoutant la prestation « Service+ intervention immédiate » à 5€</p>",
                    valeur: '25€'
                },
                {
                    id: '2.3',
                    titre: 'Réparation d\'un composant diagnostiqué défectueux',
                    description: "                            <p>Réparations électroniques de certains composants\n" +
                        "(CM, CPU, RAM, CG , Disques, Alim), remplacement d’un connecteur de charge de pc portable non-soudé. Max 45min.\n" +
                        "Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+ intervention sous 72H » à 25€</p>",
                    valeur: '50€'
                },
                {
                    id: '2.4',
                    titre: 'Micro-soudure d\'un composant',
                    description: "                            <p>Réparations électroniques ou ajout de certains composants électroniques\n" +
                        "par micro-soudures comme le connecteur de charge de pc portable. Max 45min. Possibilité d’intervention dans les 72H\n" +
                        "en rajoutant la prestation « Service+ intervention sous 72H » à 25€</p>",
                    valeur: '40€'
                },
                {
                    id: '2.5',
                    titre: '1/2 Heure de main d\'œuvre',
                    description: "                            <p>Peut être facturée à la place de certaines prestations si celles-ci sont à\n" +
                        "effectuer plusieurs fois (ex : installation composant simple / installation logiciel).</p><br/><p>Toute intervention sur Smartphone,\n" +
                        "Tablette ou Console. L’intervention effectuée sous cette prestation devra être commentée sur le BiA et la Facture client\n" +
                        "dans la case « Commentaires ».</p><br/><p>Max 30min. Possibilité d’intervention dans l’instant en rajoutant la prestation « Service+\n" +
                        "intervention immédiate » à 5€</p>",
                    valeur: '30€'
                },
                {
                    id: '2.6',
                    titre: 'Heure de main d\'œuvre',
                    description: "                            <p> Peut être facturée à la place de certaines prestations (installation composant\n" +
                    "simple / installation logiciel, s’il y en a plusieurs). L’intervention effectuée sous cette prestation devra être commentée\n" +
                    "sur le BiA et la Facture client dans la case « Commentaires ». Max 60min.</p>",
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
                    titre: 'Installation d’un système d’exploitation',
                    description: "                            <p>Déploiement et installation d’un système d’exploitation sur\n" +
                        "l’ordinateur d’un client.</p><br/><p>Système au choix : Windows, Linux, MacOS.</p><br/><p>MacOS ne pourra être installé que sur du matériel\n" +
                        "Apple Mac.</p><br/><p>L’installation comprend également les pilotes des composants ainsi que les dernières mises à jour système.\n" +
                        "</p><br/><p>Max 30min. Possibilité d’intervention dans l’instant en rajoutant la prestation « Service+ intervention immédiate » à 5€\n" +
                        "</p><br/><p>La création de session “Utilisateur” reste à la charge du client quelque soit le système d’exploitation.</p>",
                    valeur: '30€'
                },
                {
                    id: '3.2',
                    titre: 'Installation d’un seul logiciel',
                    description: "                            <p>Installation d’un logiciel (gratuit / payant / libre / propriétaire) ne nécessitant\n" +
                        "pas la création ou la connexion à un compte utilisateur nouveau ou existant. Max 10 à 15min</p><br/><p>Pour l’installation d’un\n" +
                        "logiciel sous licence avec preuve de licence fournie par le client et/ou nécessitant la création ou la connexion à un compte\n" +
                        "utilisateur nouveau ou existant (Microsoft Pack Office, tout Antivirus payant, suite Adobe, etc...), un ajout de la\n" +
                        "prestation « Service+ intervention COMPLEXE » à 25€ sera à prévoir. Max 1h00.</p><br/><p>Possibilité d’intervention dans l’instant\n" +
                        "en rajoutant la prestation « Service+ intervention immédiate » à 5€ dans les 2 cas.</p>",
                    valeur: '5€'
                },
                {
                    id: '3.3',
                    titre: 'Mise en service initiale',
                    description: "                            <p>Premier démarrage d’un PC neuf pour création de session Utilisateur avec ce\n" +
                        "dernier + choix d’un mot de passe si besoin.</p><br/><p>Installation des mises à jour Windows et des pilotes composants si besoin.\n" +
                        "</p><br/><p>Premier démarrage et installation logiciel d’une imprimante sur l’ordinateur d’un client.</p><br/><p>Test d’impression rapide.\n" +
                        "Max 15 à 20min.</p><br/><p>Possibilité d’intervention dans l’instant en rajoutant la prestation « Service+ intervention immédiate » à 5€</p>",
                    valeur: '15€'
                },
                {
                    id: '3.4',
                    titre: 'Flash / BackFlash de BIOS ou UEFI',
                    description: "                            <p>Mettre à jour ou revenir sur une version antérieure stable du micro-logiciel de la carte mère appelé sur les anciennes cartes mères BIOS, et qui s’appelle UEFI sur les modèles plus récentes\n" +
                        "car ils possèdent une interface graphique gérable à la souris.</p><br/><p>Possibilité d’intervention dans l’instant en rajoutant la prestation « Service+ intervention immédiate » à 5€\n" +
                        "Cette prestation peut être proposée seule mais doit être proposée en plus de la prestation de Montage Complet d’un PC Tour seul, et de la prestation de Démontage / Remontage seul</p>",
                    valeur: '10€'
                },
                {
                    id: '3.5',
                    titre: 'Paramétrage de BIOS ou UEFI',
                    description: "                            <p>Un paramétrage et une sauvegarde d’un profil de ce paramétrage du micro-\n" +
                        "logiciel de la carte mère sera effectuée sous le nom « serre-vis ».</p><br/><p>Max 15min. Possibilité d’intervention dans l’instant en\n" +
                        "rajoutant la prestation « Service+ intervention immédiate » à 5€\n" +
                        "</p><br/><p>Cette prestation peut être proposée seule mais doit être proposée en plus de la prestation de Montage Complet d’un\n" +
                        "PC Tour seul, et de la prestation de Démontage / Remontage seul.</p>",
                    valeur: '10€'
                },
                {
                    id: '3.6',
                    titre: 'Mise à niveau / Restauration d’un système d’exploitation',
                    description: "                            <p>Possibilité de passer sur une version plus récente\n" +
                        "d’un système d’exploitation (ex. Windows 10 -> Windows 11, mais aussi Windows 10 21H2 -> 22H2, etc...) OU de restaurer\n" +
                        "un système d’exploitation corrompu suite à une mise à jour défectueuse vers un point de restauration à une date\n" +
                        "antérieure.</p><br/><p>Ces prestations permettent de conserver les données utilisateur.\n" +
                        "</p><br/><p>Possibilité d’intervention dans l’instant en rajoutant la prestation « Service+ intervention immédiate » à 5€</p>",
                    valeur: '25€'
                },
                {
                    id: '3.7',
                    titre: 'Flashage ROM sur Smartphone / Tablette',
                    description: "                            <p>Installation ou réinstallation de la ROM (système d’exploitation\n" +
                        "spécifique aux smartphones / tablettes) Android ou iOS.</p><br/><p>Pour les smartphones sous Google Android, possibilité de\n" +
                        "demander une ROM OpenSource sans Google (/e/ – GrapheneOS – LineageOS – Ubuntu Touch – iodé – Manjaro) en\n" +
                        "fonction des compatibilités matériel/logiciel.\n" +
                        "</p><br/><p>Possibilité d’intervention dans l’instant en rajoutant la prestation « Service+ intervention immédiate » à 5€</p>",
                    valeur: '30€'
                }
            ]
        },
        {
            id: 4,
            titre: 'Montages de composants',
            donnees: [
                {
                    id: '4.1',
                    titre: 'Montage seul d\'un PC Tour complet',
                    description: "                        <p>Assemblage de composants, pièce par pièce, à l’intérieur d’un boîtier\n" +
                        "(Boîtier, alimentation, carte mère, processeur, RAM, refroidisseur, disques, carte graphique, lecteurs et cartes\n" +
                        "contrôleurs si besoin)</p><br/><p>Une fois le PC assemblé, un premier démarrage et une batterie de tests (Memtest pour la RAM,\n" +
                        "LinX pour le processeur, Furmark pour la carte graphique) à l’aide d’un disque contenant un système Windows de l’Atelier\n" +
                        "seront effectués.</p><br/><p>Cette prestation n’inclut pas le Flash/BackFlash de BIOS / UEFI de la carte mère, ni l’installation du\n" +
                        "système d’exploitation sur l’un des disques du PC assemblé.</p><br/><p>La prestation de Montage Complet sera proposée de base\n" +
                        "au client et inclura les Flash/BackFlash de BIOS / UEFI ainsi que son paramétrage qu’il pourra refuser (une remise sur le\n" +
                        "tarif total pourra être effectuée en fonction de la complexité). Max 1h.</p><br/><p>Possibilité d’intervention dans les 72H en\n" +
                        "rajoutant la prestation « Service+ intervention sous 72H » à 25€\n" +
                        "</p><br/><p>Si le montage comprend un refroidissement par Watercooling AIO ou des systèmes de LEDs RGB alors le montage\n" +
                        "devient complexe et nécessitera l’ajout de la prestation « Service+ intervention COMPLEXE » à 25€.\n" +
                        "(Ex. Tarif Montage d’un PC Complet seul complexe = 80 à 125€ et en 72H = 105 à 150€)</p>",
                    valeur: '55€'
                },
                {
                    id: '4.2',
                    titre: 'Démontage / Remontage seul d\'un PC Tour',
                    description: "                        <p>Démontage des composants d’un PC Tour, pièce par pièce,\n" +
                        "pour Remontage dans un nouveau boîtier ou dans le même boîtier si le montage d’origine était mal fait.</p><br/><p>Une fois le PC\n" +
                        "assemblé, un premier démarrage et une batterie de tests (Memtest pour la RAM, LinX pour le processeur, Furmark pour\n" +
                        "la carte graphique) à l’aide d’un disque contenant un système Windows de l’Atelier seront effectués.</p><br/><p>Cette prestation\n" +
                        "n’inclut pas le Flash/BackFlash de BIOS / UEFI de la carte mère, ni l’installation du système d’exploitation sur l’un des\n" +
                        "disques du PC assemblé. Max 1h30.</p><br/><p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "intervention sous 72H » à 25€\n" +
                        "</p><br/><p>Si le montage comprend un refroidissement par Watercooling AIO ou des systèmes de LEDs RGB alors le montage\n" +
                        "devient complexe et nécessitera l’ajout de la prestation « Service+ intervention COMPLEXE » à 25€.\n" +
                        "(Ex. Tarif Démontage / Remontage seul complexe = 105 à 150€ et en 72H = 130 à 175€).</p>",
                    valeur: '80€'
                },
                {
                    id: '4.3',
                    titre: 'Installation d\'un seul composant',
                    description: "                        <p>Installation simple d’un composant facile d’accès et qui ne nécessite pas+\n" +
                        "plus de 10min de temps d’exécution, tel que la RAM, les disques, une carte graphique, les lecteurs et cartes contrôleurs,+\n" +
                        "ainsi que certains modèles de refroidisseurs CPU. Max 10min.</p><br/><p>Possibilité d’intervention dans l’instant en rajoutant la+\n" +
                        "prestation « Service+ intervention immédiate » à 5€+\n" +
                        "</p><br/><p>Pour l’installation d’une carte mère, d’un processeur, d’un refroidissement par Watercooling AIO, ou d’une alimentation,+\n" +
                        "la prestation de « Service+ intervention COMPLEXE » à 25€ devra être ajoutée et facturée. Max 45min.</p><br/><p>Possibilité+\n" +
                        "d’intervention dans l’instant en rajoutant la prestation « Service+ intervention immédiate » à 5€</p>",
                    valeur: '10€'
                },
            ]
        },
        {
            id: 5,
            titre: 'Entretien du matériel',
            donnees: [
                {
                    id: '5.1',
                    titre: 'Dépoussiérage d\'un PCs/Smartphone/Tablette/Console',
                    description: "                            <p>Nettoyage léger interne et/ou externe d’un PC+\n" +
                        "Tour,d’un PC Portable, ou de Smart/Tab/Cons, à l’aide d’une soufflette reliée à un compresseur d’air + chiffons + spray.+\n" +
                        "La poussière éjectée sera récupérée par un aspirateur pour évitée qu’elle ne retombe dans le PC ou qu’elle ne vole sur+\n" +
                        "les alentours. Max 10 à 15min.+\n" +
                        "</p><br/><p>Possibilité d’intervention dans l’instant en rajoutant la prestation « Service+ intervention immédiate » à 5€+\n" +
                        "</p><br/><p>Si le PC Tour est très très poussiéreux, l’intervention en sera plus longue et/ou si le client souhaite un pont thermique -+\n" +
                        "</p><br/><p>Pour les PC portables qui nécessitent un démontage complet de la coque inférieure, alors il faudra compter l’ajout de la+\n" +
                        "prestation « Service+ intervention COMPLEXE » à 25€. Max 45min à 1h.+\n" +
                        "</p><br/><p>Possibilité d’intervention dans l’instant également en rajoutant la prestation « Service+ intervention immédiate » à 5€.+\n" +
                        "(EX. Tarif Dépoussiérage PC COMPLEXE dans l’instant = 45€)</p>",
                    valeur: '15€'
                },
                {
                    id: '5.2',
                    titre: 'Désinfection contre les Virus',
                    description: "                            <p>Nettoyage logiciel d’un système d’exploitation Windows ou MacOS à l’aide+\n" +
                        "de logiciels de désinfection antivirus, antimalware, antiadware, antispyware. Max 1h30.</p><br/><p>Possibilité d’intervention dans+\n" +
                        "les 72H en rajoutant la prestation « Service+ intervention sous 72H » à 25€</p>",
                    valeur: '70€'
                },
                {
                    id: '5.3',
                    titre: 'Câble management d’un PC Tour',
                    description: "                            <p>Réorganisation des câbles d’un PC Tour. Max 30min.</p><br/><p>Si présence d’un+\n" +
                        "Watercooling AIO ou de plusieurs ventilateurs RGB, alors il faudra compter l’ajout de la prestation « Service++\n" +
                        "intervention COMPLEXE » à 25€.</p><br/><p>Possibilité d’intervention dans l’instant en rajoutant la prestation « Service++\n" +
                        "intervention immédiate » à 5€ dans les 2 cas.</p>",
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
                    description: "                            <p>Commencer par un test de viabilité du disque d’origine (reconnu,+\n" +
                        "sans secteurs défectueux).</p><br/><p>Copier/Coller du dossier personnel de l’utilisateur (Documents, Photos, Musique, Vidéos,+\n" +
                        "Téléchargements) sur un autre support qu’il soit interne ou externe.</p><br/><p>Cette prestation n’inclue pas le support récepteur+\n" +
                        "des données, ainsi que les logiciels installés sur le système d’exploitation. Max 35min si le disque d’origine est sain.+\n" +
                        "</p><br/><p>Possibilité d’intervention dans l’instant en rajoutant la prestation « Service+ intervention immédiate » à 5€</p>",
                    valeur: '25€'
                },
                {
                    id: '6.2',
                    titre: 'Clonage d’un disque système ou de données',
                    description: "                            <p>Commencer par un test de viabilité du disque d’origine+\n" +
                        "(reconnu ou pas, présence ou non de secteurs défectueux).</p><br/><p>Copie à l’identique d’un disque Système ou de Données sur+\n" +
                        "un autre support de même capacité ou de capacité supérieure.</p><br/><p>La prestation n’inclue pas le support récepteur du+\n" +
                        "clonage. Max 35min si le disque d’origine est sain.</p><br/><p>Possibilité d’intervention dans l’instant en rajoutant la prestation «Service+ intervention immédiate » à 5€+\n" +
                        "</p><br/><p>Si le disque d’origine est endommagé la copie peut prendre un temps indéterminé. Pas de possibilité de proposer de+\n" +
                        "suppléments d’intervention.</p>",
                    valeur: '35€'
                },
                {
                    id: '6.3',
                    titre: 'Récupération des données',
                    description: "                            <p>Commencer par un test de viabilité du disque d’origine (reconnu ou pas,+\n" +
                        "présence ou non de secteurs défectueux).</p><br/><p>Récupération des données du dossier personnel de l’utilisateur (Documents,+\n" +
                        "Photos, Musique, Vidéos, Téléchargements) d’un disque effacé / formaté / légèrement endommagé sur un autre support+\n" +
                        "qu’il soit interne ou externe.</p><br/><p>Cette prestation n’inclue pas le support récepteur des données, ainsi que les logiciels+\n" +
                        "installés sur le système d’exploitation. Max 35min si le disque d’origine est sain.+\n" +
                        "</p><br/><p>Si le disque d’origine est endommagé la copie peut prendre un temps indéterminé. Dans ce cas un temps de main-+\n" +
                        "d’œuvre (30€, 50€ ou 50€+) sera ajouté et facturé en plus</p>",
                    valeur: '15€'
                },
            ]
        },
        {
            id: 7,
            titre: 'Services +',
            donnees: [
                {
                    id: '7.1',
                    titre: 'Service+ intervention immédiate',
                    description: "                            <p>Permet au client de ne pas attendre le délai minimum de traitement+\n" +
                        "d’une prestation simple et de passer devant celle(s) déjà en cours et/ou en attente pour être traité dans l’instant, si la+\n" +
                        "prestation à effectuer pour le client le permet.+\n" +
                        "</p><br/><p>Prestations éligibles au Supplément intervention immédiate :+\n" +
                        "</p><br/><p>Installation d’un système d’exploitation, installation d’un logiciel, changement de dalle PC portable, changement d’un+\n" +
                        "clavier de PC portable, dépoussiérage simple ou complexe, Flash/BackFlash de BIOS / UEFI, Paramétrage d’un BIOS /+\n" +
                        "UEFI, Mise à niveau / Restauration d’un système d’exploitation, Flashage ROM, installation composant simple ou+\n" +
                        "complexe, clonage de disque si support sain, sauvegarde et transfert de données si support sain, première mise en+\n" +
                        "service et 1/2 heure de main d’œuvre.</p>",
                    valeur: '5€'
                },
                {
                    id: '7.2',
                    titre: 'Service+ intervention COMPLEXE',
                    description: "                            <p>S’ajoute à une prestation simple si le niveau de complexité est+\n" +
                        "important et engendre un temps de traitement beaucoup plus long.+\n" +
                        "</p><br/><p>Prestations éligibles au Supplément intervention complexe :+\n" +
                        "</p><br/><p>Dépoussiérage, changement de dalle PC portable, changement de clavier PC portable, montage seul d’un PC tour+\n" +
                        "complet, démontage/remontage seul d’un PC tour, installation d’un logiciel et/ou d’un composant et câble management</p>",
                    valeur: '25€'
                },
                {
                    id: '7.3',
                    titre: 'Service+ intervention sous 72H',
                    description: "                            <p>Permet au client de ne pas attendre le délai minimum de traitement+\n" +
                        "d’une prestation longue et de passer devant celle(s) déjà en cours et/ou en attente pour être traité dans les 72H, si la+\n" +
                        "prestation à effectuer le permet.+\n" +
                        "</p><br/><p>Prestations éligibles au Supplément intervention sous 72h :+\n" +
                        "</p><br/><p>Diagnostic complet PC Tour, diagnostic complet PC portable, réparation d’un composant diagnostiqué défectueux,+\n" +
                        "micro-soudure d’un composant, désinfection virus, montage seul d’un PC tour complet et démontage / remontage seul+\n" +
                        "d’un PC tour.</p>",
                    valeur: '25€'
                },
                {
                    id: '7.4',
                    titre: 'Service+ “Apprendre à faire soi-même”',
                    description: "                            <p>Possibilité pour le client d’apprendre à faire par lui-même+\n" +
                        "les différentes prestations de services suivant mes conseils, aides et démonstrations.</p><br/><p>Ce service pourra être proposé en+\n" +
                        "ajout d’une prestation de service classique OU pour la préparation d’ateliers de groupes décidés par les clients depuis le+\n" +
                        "site internet ou le local. Tarif minimum 25€ / maximum 60€ en fonction de la prestation de service liée</p>",
                    valeur: 'sur devis'
                },
                {
                    id: '7.5',
                    titre: 'Renvoi d’un composant vers son constructeur',
                    description: "                            <p> Démarche auprès du constructeur via son site web, d’un+\n" +
                        "retour pour panne d’un produit ou composant sous garantie, puis expédition. Max 15min </p><br/><p> Délai : En fonction du+\n" +
                        "constructeur (pouvant aller jusqu’à 2 mois).</p><br/><p>Le dossier de retour sera créer au nom du client avec ses coordonnées+\n" +
                        "téléphoniques et postaux mais avec l’adresse mail de l’Atelier !+\n" +
                        "</p><br/><p>Échanges avec le constructeur en cas de questionnement ou de facturation de réparation pour compte-rendu au client</p>",
                    valeur: '20€'
                },
                {
                    id: '7.6',
                    titre: 'Assistance bureautique”',
                    description: "                            <p>Que vous soyez un Particulier ou un Professionnel, pour vos tâches+\n" +
                        "bureautiques du quotidien ou exceptionnelles, l’Atelier propose une assistance pour :+\n" +
                        "</p><br/><p>Vos démarches administratives (création de comptes sur service public pour l’emploi, les impôts, la santé, des travaux,+\n" +
                        "la retraite, un ehpad, un décès, un voyage, etc...) avec impressions des documents justificatifs incluses si besoin.+\n" +
                        "</p><br/><p>Utiliser l’outil informatique (naviguer sur internet, consulter ses courriels, discuter en visio avec ses proches, etc...)+\n" +
                        "Tableurs des gestion Entreprise (compta/caisse/facturation/stock, statistiques, etc...)+\n" +
                        "</p><br/><p>Documents texte administratifs+\n" +
                        "</p><br/><p>Travail graphique (dépliants, flyers, création de logos, de plans 3D d’intégration, etc...)</p>",
                    valeur: 'sur devis'
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