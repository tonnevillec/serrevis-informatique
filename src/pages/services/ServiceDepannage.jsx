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
                    titre: 'Diagnostic rapide PCs/Smartphone/Tablette/Console',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '35€'
                },
                {
                    id: '1.3',
                    titre: 'Diagnostic rapide PCs/Smartphone/Tablette/Console',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '15€'
                },
                {
                    id: '1.4',
                    titre: 'Diagnostic rapide d\'un seul composant',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '5€'
                }
            ]
        },
        {
            id: 2,
            titre: 'Réparations',
            donnees: [
                {
                    id: '2.1',
                    titre: 'Diagnostic complet d\'un PC Tour',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
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
                    id: '2.2',
                    titre: 'Diagnostic rapide PCs/Smartphone/Tablette/Console',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '35€'
                },
                {
                    id: '2.3',
                    titre: 'Diagnostic rapide PCs/Smartphone/Tablette/Console',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '15€'
                },
                {
                    id: '2.4',
                    titre: 'Diagnostic rapide d\'un seul composant',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '5€'
                }
            ]
        },
        {
            id: 3,
            titre: 'Traitement logiciel',
            donnees: [
                {
                    id: '3.1',
                    titre: 'Diagnostic complet d\'un PC Tour',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
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
                    id: '3.2',
                    titre: 'Diagnostic rapide PCs/Smartphone/Tablette/Console',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '35€'
                },
                {
                    id: '3.3',
                    titre: 'Diagnostic rapide PCs/Smartphone/Tablette/Console',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '15€'
                },
                {
                    id: '3.4',
                    titre: 'Diagnostic rapide d\'un seul composant',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '5€'
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
                    description: "                        <p>Assemblage de composants, pièce par pièce, à l’intérieur d’un boîtier (Boîtier, alimentation,\n" +
                    "carte mère, processeur, RAM, refroidisseur, disques, carte graphique, lecteurs et cartes\n" +
                    "contrôleurs si besoin) Une fois le PC assemblé, un premier démarrage et une batterie de tests à\n" +
                    "l’aide d’un disque contenant un système Windows de l’Atelier sera effectuée.</p>\n" +
                    "<br/>\n" +
                    "<p>Cette prestation n’inclut pas le Flash/BackFlash de BIOS / UEFI de la carte mère, ni l’installation du système d’exploitation sur l’un des disques du PC assemblé</p>\n" +
                    "<br/>\n" +
                    "<p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+ intervention sous 72H » à 25€.</p>\n" +
                    "<br/>\n" +
                    "<p>Si le montage comprend un refroidissement par Watercooling AIO ou des systèmes de L Ds RGB alors le montage devient complexe et nécessitera l'ajout de la prestation « Service+ intervention COMPLEXE » à 25€.</p>",
                    valeur: '55€'
                },
                {
                    id: '4.2',
                    titre: 'Démontage / Remontage seul d\'un PC Tour',
                    description: "                        <p>Assemblage de composants, pièce par pièce, à l’intérieur d’un boîtier (Boîtier, alimentation,\n" +
                        "carte mère, processeur, RAM, refroidisseur, disques, carte graphique, lecteurs et cartes\n" +
                        "contrôleurs si besoin) Une fois le PC assemblé, un premier démarrage et une batterie de tests à\n" +
                        "l’aide d’un disque contenant un système Windows de l’Atelier sera effectuée.</p>\n" +
                        "<br/>\n" +
                        "<p>Cette prestation n’inclut pas le Flash/BackFlash de BIOS / UEFI de la carte mère, ni l’installation du système d’exploitation sur l’un des disques du PC assemblé</p>\n" +
                        "<br/>\n" +
                        "<p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+ intervention sous 72H » à 25€.</p>\n" +
                        "<br/>\n" +
                        "<p>Si le montage comprend un refroidissement par Watercooling AIO ou des systèmes de L Ds RGB alors le montage devient complexe et nécessitera l'ajout de la prestation « Service+ intervention COMPLEXE » à 25€.</p>",
                    valeur: '80€'
                },
                {
                    id: '4.3',
                    titre: 'Installation d\'un seul composant',
                    description: "                        <p>Assemblage de composants, pièce par pièce, à l’intérieur d’un boîtier (Boîtier, alimentation,\n" +
                        "carte mère, processeur, RAM, refroidisseur, disques, carte graphique, lecteurs et cartes\n" +
                        "contrôleurs si besoin) Une fois le PC assemblé, un premier démarrage et une batterie de tests à\n" +
                        "l’aide d’un disque contenant un système Windows de l’Atelier sera effectuée.</p>\n" +
                        "<br/>\n" +
                        "<p>Cette prestation n’inclut pas le Flash/BackFlash de BIOS / UEFI de la carte mère, ni l’installation du système d’exploitation sur l’un des disques du PC assemblé</p>\n" +
                        "<br/>\n" +
                        "<p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+ intervention sous 72H » à 25€.</p>\n" +
                        "<br/>\n" +
                        "<p>Si le montage comprend un refroidissement par Watercooling AIO ou des systèmes de L Ds RGB alors le montage devient complexe et nécessitera l'ajout de la prestation « Service+ intervention COMPLEXE » à 25€.</p>",
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
                    titre: 'Diagnostic complet d\'un PC Tour',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
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
                    id: '5.2',
                    titre: 'Diagnostic rapide PCs/Smartphone/Tablette/Console',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '35€'
                },
                {
                    id: '5.3',
                    titre: 'Diagnostic rapide PCs/Smartphone/Tablette/Console',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '15€'
                },
                {
                    id: '5.4',
                    titre: 'Diagnostic rapide d\'un seul composant',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '5€'
                }
            ]
        },
        {
            id: 6,
            titre: 'Traitement des données',
            donnees: [
                {
                    id: '6.1',
                    titre: 'Diagnostic complet d\'un PC Tour',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
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
                    id: '6.2',
                    titre: 'Diagnostic rapide PCs/Smartphone/Tablette/Console',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '35€'
                },
                {
                    id: '6.3',
                    titre: 'Diagnostic rapide PCs/Smartphone/Tablette/Console',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '15€'
                },
                {
                    id: '6.4',
                    titre: 'Diagnostic rapide d\'un seul composant',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '5€'
                }
            ]
        },
        {
            id: 7,
            titre: 'Services +',
            donnees: [
                {
                    id: '7.1',
                    titre: 'Diagnostic complet d\'un PC Tour',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
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
                    id: '7.2',
                    titre: 'Diagnostic rapide PCs/Smartphone/Tablette/Console',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '35€'
                },
                {
                    id: '7.3',
                    titre: 'Diagnostic rapide PCs/Smartphone/Tablette/Console',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '15€'
                },
                {
                    id: '7.4',
                    titre: 'Diagnostic rapide d\'un seul composant',
                    description: "                            <p>Recherche de panne matériel et/ou logiciel, tests de tous les composants (boîtier,\n" +
                        "                                montage+câble management, carte mère, BIOS/UEFI, CPU, RAM, Alim, carte PCIe,\n" +
                        "                                disques, refroidissements, OS) des pièces ensembles dans l’ordinateur et\n" +
                        "                                individuellement par logiciel ou en tests croisés, puis Devis de réparation</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Le diagnostic n’inclus pas de réparation(s) !</p>\n" +
                        "                            <br/>\n" +
                        "                            <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+\n" +
                        "                                intervention sous 72H » à 25€</p>",
                    valeur: '5€'
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