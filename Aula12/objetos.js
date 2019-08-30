// Objetos 

// São mutáveis - podem ser modificados

const obj = {
    prop1: 'prop1',
    prop2: 'prop2'
}

obj.prop1 = 'propriedade1'

console.log('obj1', obj)

const obj2 = {
    prop1: 'prop1',
    prop2: 'prop2'
}

delete obj2.prop1
console.log('obj2', obj2)

// Manipulados por referência - significa que cada objeto que crio é um objeto diferente

const obj3 = {
    prop1: 'prop1',
    prop2: 'prop2'
}

console.log('obj3', obj3)

const obj4 = {
    prop1: 'prop1',
    prop2: 'prop2'
}

console.log('obj4', obj4)

console.log('obj3 é igual a obj4', obj3 === obj4)

const objCopy = obj3
console.log('objCopy', objCopy)

console.log('objCopy é igual a obj3', objCopy === obj3) //simplesmente tem a referência do objeto

objCopy.prop1 = 'propriedade do objeto copy' // Manipulados por referência 

console.log('obj3', obj3) 