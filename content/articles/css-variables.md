# les variables css

## pourquoi faire ? 

les variables css sont utiles dans plusieurs cas, ici nous allons en voir 2. 

comme dans tout langage de programmation, les variables permettent de stocker des valeurs et de les réutiliser plus tard.

### stocker des attributs

prenons ce code css comme example

```css
.classExample1 {
    background-color: #000;
    color: #fff;
    font-size: 1.5rem;
    padding: 1rem;
    margin: 1rem;
}

.classExample2 {
    background-color: #000;
    color: #f00;
    font-size: 2rem;
}

.classExample3 {
    background-color: #000;
    color: #0f0;
    font-size: 3rem;
}
```

on voit que les 3 classes ont le même background-color, si on veut changer la couleur de fond, il faut le faire 3 fois.

les variables sont donc une solution pour éviter de répéter du code.

il faut pour cela ajouter au debut du fichier css la ligne suivante

```css
:root {
    --nom-de-la-variable: valeur;
}
```

et pour utiliser la variable, il faut remplacer la valeur par `var(--nom-de-la-variable)`

dans notre exemple, on va donc avoir

```css
:root {
    --background-color: #000;
}

.classExample1 {
    background-color: var(--background-color);
    color: #fff;
    font-size: 1.5rem;
    padding: 1rem;
    margin: 1rem;
}

.classExample2 {
    background-color: var(--background-color);
    color: #f00;
    font-size: 2rem;
}

.classExample3 {
    background-color: var(--background-color);
    color: #0f0;
    font-size: 3rem;
}
```

si on veut changer la couleur de fond, il suffit de changer la valeur de la variable

### modifier les variables avec javascript

> TODO