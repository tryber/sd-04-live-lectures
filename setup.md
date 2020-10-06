## Ubuntu

Obs 1: não copiar o `$`.

Obs 2: Lembre-se de exportar seus bancos antes de fazer as operações abaixo.

```bash
# Removendo mysql antigo
$ sudo apt remove —purge mysql-server
$ sudo apt-get remove --purge mysql*
$ sudo apt-get purge mysql*
$ sudo apt-get autoremove
$ sudo apt-get autoclean
$ sudo apt-get remove dbconfig-mysql
$ sudo rm -rf /etc/mysql /var/lib/mysql /var/log/mysql
# Install
$ wget -c https://dev.mysql.com/get/mysql-apt-config_0.8.11-1_all.deb
$ sudo dpkg -i mysql-apt-config_0.8.11-1_all.deb
$ sudo apt-key adv --keyserver keys.gnupg.net --recv-keys 8C718D3B5072E1F5
$ sudo apt-get update
$ sudo apt-get install mysql-server
```

## Mac

1. Baixar o pacote pelo link: [http://dev.mysql.com/downloads/shell/](http://dev.mysql.com/downloads/shell/)
2. Clicar duas vezes no arquivo DMG.
3. Seguir as etapas de instalação.

[Link](https://dev.mysql.com/doc/refman/5.7/en/installing-mysql-shell-osx-quick.html)

4. Rodar o comando abaixo no terminal
```bash
$ mysqlsh -u user -h localhost --classic --dba enableXProtocol
```

ou via mysql

```bash
$ mysql -u user -p
mysql> INSTALL PLUGIN mysqlx SONAME 'mysqlx.so';
```
