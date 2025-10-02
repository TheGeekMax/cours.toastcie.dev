# Commandes utiles pour gerer unix

## Serveurs

### Screens 

creer un screen :

```bash
screen -S nomDuScreen
```

se ratacher a un screen :

```bash
screen -r nomDuScreen
```

- NOTE pour se detacher d'un screen, faire `CTRL + A` puis `D`

creer et executer un fichier dedant :

```bash
screen -S nomDuScreen -dm bash chemin/du/fichier.sh
```

lister les screens :

```bash
screen -ls
```

### Minecraft

les eula

```bash
echo "eula=true" > eula.txt
```

## Droits

### Les plus utiles

ajouter les droits d'execution a un fichier :

```bash
chmod u+x fichier.sh
```

ajouter reccursivement la lecture et l'ecriture a un dossier :

```bash
chmod -R u+rw dossier
```

## Monitoring


### Dashboards

voir l'utilisation du disque :

```bash
df -h
```

voir l'utilisation des differentes ressources :

```bash
htop
# ou
top
```

voir vitesse disque (non fonctionnel sur mac) :

```bash
iotop
```

utilisation reseau :

```bash
netstat -tulpn
```

### Gestion

tuer un processus par son nom :

```bash
pkill nomDuProcessus
```

tuer par son pid :

```bash
kill -9 pid
```

chercher les processus utilisant un port :

```bash
lsof -i :numeroDuPort
```

## Manipulation des données

### Recherche

trouver un nom de fichier dans un dossier :

```bash
find /chemin/du/dossier -name "nomDuFichier"
```

chercher dans le contenue des fichiers a partir d'un dossier :

```bash
grep -r "texte a chercher" /chemin/du/dossier
```


### Copie

copier un dossier reccursivement :

```bash
cp -r /chemin/du/dossier1 /chemin/du/dossier2
```

copier un simple fichier :

```bash
cp /chemin/du/fichier1 /chemin/du/fichier2
```

### Compression

compresser un dossier en .tar.gz :

```bash
tar -czvf archive.tar.gz /chemin/du/dossier
```

decompresser un .tar.gz :

```bash
tar -xzvf archive.tar.gz
```

### Manipulation de texte

compter le nombres de ligne dans un fichier :

```bash
wc -l fichier.txt
```

remplacer du texte et l'afficher dans le terminal :

```bash
sed -n 's/texte_a_remplacer/nouveau_texte/g' fichier.txt
```

remplacer du texte et l'enregistrer dans le fichier :

- NOTE : remplace les données du fichier 

```bash
sed -i 's/texte_a_remplacer/nouveau_texte/g' fichier.txt
```

afficher un range de lignes d'un fichier :

```bash
sed -n 'X,Yp' fichier.txt
```

voir la difference entre 2 fichiers :

```bash
diff fichier1.txt fichier2.txt
```

## Networking

### General

tester la connexion a un serveur :

```bash
ping adresse_du_serveur.example
```

telecharger un fichier depuis une url :

```bash
wget http://example.com/fichier.zip
# ou 
curl -O http://example.com/fichier.zip
```

connection ssh : 

```bash
ssh user@adresse_du_serveur.example
```

copier un fichier en ssh :

```bash
scp /chemin/du/fichier user@adresse_du_serveur.example:/chemin
```