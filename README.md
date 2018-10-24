# Decentrale Basis Registratie Personen

## Proof of Concept gebouwd op Hyperledger Fabric

### Gebruik via Hyperledger Composer Playground (eenvoudig)

Open de Hyperledger Playground via https://composer-playground.mybluemix.net/login

1. Klik op "Deploy a new Business Network"
2. Gebruik "brp" als naam en kies zelf een beschrijving.
3. Network admin card is "admin@brp" in dit voorbeeld
4. Upload de meest recente Business Network Definition (brp@0.0.**.bna) onder het kopje "Model Network Starter Template"
5. Deploy!

Je kunt nu als administrator zelfstandig assets/entiteiten aanmaken, transacties uitvoeren en zien welke parameters zoal gebruikt zijn. Ook de configuratie is nu makkelijk zichtbaar.

bron: https://hyperledger.github.io/composer/latest/tutorials/playground-tutorial.html

# Je eigen blockchain en REST-server deployen
Dit is iets lastiger, maar instructies zijn goed te vinden via de documentatie van Hyperledger Fabric:

1. Installeer eerst de developers tools van Hyperledger Fabric (https://hyperledger.github.io/composer/latest/installing/development-tools.html)
2. Git clone deze repository naar je lokale omgeving
3. Deploy deze repository zoals beschreven in deze handleiding: https://hyperledger.github.io/composer/latest/business-network/bnd-deploy
Netwerknaam is "brp", Admincard is "PeerAdmin@hlfv1", networkADmin en adminSecret zijn "admin" en "adminpw" respectievelijk.
4. Open de composer RESTful server met `composer-rest-server -c admin@brp -n never -u true -w true` om een API te openen op poort 3001 van je lokale omgeving - 127.0.0.1:3001
Met deze koppeling kan je op basis van elk framework een applicatie bouwen om te interacteren met deze blockchain.  



