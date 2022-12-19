#!/bin/bash´

set -e

bash /root/ub-base.sh

config_apache(){
    # sed -i "s/\${APACHE_RUN_USER}/\www-data/g" /etc/apache2/apache2.conf
    # sed -i "s/${APACHE_RUN_DIR}/$/g" /etc/apache2/apache2.conf
    source /etc/apache2/envvars
    rm -f /var/run/apache2/apache2.pid
    /usr/sbin/apache2 -DFOREGROUND
}

main(){
    config_apache
}

main

