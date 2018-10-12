#!/bin/bash
echo Wat is de nieuwe versie?
read versienummer
echo updaten met $versienummer
composer archive create -t dir -n .
composer network install -a brp@0.0.$versienummer.bna -c PeerAdmin@hlfv1
composer network upgrade -c PeerAdmin@hlfv1 -n brp -V 0.0.$versienummer
composer-rest-server -c admin@brp -n never -u true -w true
