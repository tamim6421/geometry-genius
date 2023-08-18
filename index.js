      // common function 
      function convertInputValue(inputId){
        const inputValue = document.getElementById(inputId).value 
        const value = parseFloat(inputValue)
        return value
    }
    function setInnerText(setId, area){
        const element = document.getElementById(setId)
        element.innerText = area
    }

    function createAreaCalculation(areaType, area){
        const addSection = document.getElementById('addSection')
        const p = document.createElement ('p')
        p.classList.add('my-2')
        const count = addSection.childElementCount
        p.innerHTML=`${count+1}. ${areaType} ${area} cm<sup>2</sup> <button class= "btn btn-sm btn-success">Convert </button>
        
        `
        addSection.appendChild(p)
        console.log(addSection)
    }

    // triangleArea 
    function triangleArea(){
        const base = convertInputValue('triangleBase')
        const height = convertInputValue('triangleBase')
        if(isNaN(base) || isNaN(height)){
            alert('input a valid number')
            return;
        }
        const area = 0.5 * base * height
        setInnerText('triangleArea', area)
        createAreaCalculation( 'Triangle', area)
    }
    // rectangleArea
    function rectangleArea(){
        const width = convertInputValue('recWidth')
        const length = convertInputValue('recLength')
        if(isNaN(width) || isNaN(length)){
            alert('input a valid number')
            return;
        }
        const area = width * length
        setInnerText('rectangleArea', area)
        createAreaCalculation( 'Rectangle', area)
    }

    // Parallelogram
   function peraArea(){
    const peraBase = convertInputValue('peraBase')
    const peraHeight = convertInputValue('peraHight')
    if(isNaN(peraBase) || isNaN(peraHeight)){
            alert('input a valid number')
            return;
        }
    const area = peraBase * peraHeight
    setInnerText('peralleArea', area)
    createAreaCalculation( 'Parallelogram', area)
   }
//    rhombusArea
function rhombusBtn(){       
    const rhombusBase = convertInputValue('rhombusBase')
    const rhombusHight = convertInputValue('rhombusHight')
    if(isNaN(rhombusBase) || isNaN(rhombusHight)){
            alert('input a valid number')
            return;
        }
    const area = 0.5 * rhombusBase * rhombusHight
    setInnerText('rhombusArea', area)   
    createAreaCalculation( 'Rhombus', area) 
}
// pentagon 
function pentagonBtn(){
    const perimeter = convertInputValue('perimeter')
    const apothem = convertInputValue('apothem')
    if(isNaN(perimeter) || isNaN(apothem)){
            alert('input a valid number')
            return;
        }
    const area = 0.5 * perimeter * apothem
    setInnerText('pentagonArea', area)
    createAreaCalculation( 'Pentagon', area) 

}

// ellipse 
function ellipseBtn(){
    const ellipseRedius1 = convertInputValue('ellipseRedius1')
    const ellipseRedius2 = convertInputValue('ellipseRedius2')
    if(isNaN(ellipseRedius1) || isNaN(ellipseRedius2)){
            alert('input a valid number')
            return;
        }
    const area = 3.14 *ellipseRedius1*ellipseRedius2
    setInnerText('ellipseArea', area)
    createAreaCalculation( 'Ellipse', area) 
}