# Factory method

## Definition

1. Le design pattern Factory, ou Factory method, défini une méthode (abstraite ou non) au sein d'une classe mère, et laisse définir ou redéfinir la méthode aux sous-classes
2. Ce pattern propose de remplacer les appels directs au constructeur de l'objet en appelant une méthode 'fabrique' spéciale. Elle permet de faire une séparation entre le code du constructeur et le code qui utilise le produit. Le code du constructeur devient alors plus **évolutif**, **indépendant**.

⚠️ La méthode fabrique n'est pas obligée de **créer** tout le temps de nouvelles instances. Elle peut retourner des objets depuis un cache, un réservoir d'objets ou une autre source.

## Personal understanding

1. Le pattern se divise en deux grandes dénominations :

   - **Les Produits**, <em>ce qui doit être fabriqué</em>
     [`ProductA`](./ProductA.ts), [`ProductB`](./ProductB.ts)
   - **Les Fabriques**, <em>ce qui permet de créer</em>
     [`FactoryA`](./FactoryA.ts), [`FactoryB`](./FactoryB.ts)

2. Les fabriques (concrète), étendent d'une classe mère, [`Factory`](./Factory.ts), qui expose une méthode **abstraite ou non** que **les classe filles définissent ou redéfinissent**

```ts
// class Factory
public abstract createProduct(): Product;

// class FactoryA extends class Factory
public createProduct(): Product{ //👈 Redefinition
  return new ProductA();
};
```

3. Les produits implémentent la même interface [`Product`](./Product.ts), pour qu'il y est polymorphisme. La classe mère constructrice `Factory`, n'a alors pas besoin de connaitre les spécificités du produit créé. Elle s'appuie sur l'interface `Product` dont elle étend pour connaitre la définition de la classe.

⚡ **Il est tout à fait possible d'utiliser l'héritage** au lieux d'implémenter une interface côté produit.
