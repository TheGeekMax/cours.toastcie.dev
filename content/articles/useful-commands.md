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

### les plus utiles

ajouter les droits d'execution a un fichier :

```bash
chmod u+x fichier.sh
```

ajouter reccursivement la lecture et l'ecriture a un dossier :

```bash
chmod -R u+rw dossier
```