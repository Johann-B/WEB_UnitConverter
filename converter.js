/*
**  Job
**
**  06/2021
*/

var categoryList = document.getElementById("category");
var inputUnitList = document.getElementById('input-unit');
var outputUnitList = document.getElementById('output-unit');
var inputValue = document.getElementById('input-value');
var outputValue = document.getElementById('output-value');


// Fonction Conversion

function convertValue() {

    if(!isNaN(parseFloat(inputValue.value))) {

        var number = parseFloat(inputValue.value);

        switch (categoryList.value) {
            case 'temperature' : {
                switch(inputUnitList.value) {
                    case '°C' : {
                        switch(outputUnitList.value) {
                            case '°C' : {
                                outputValue.value = number;
                                break;
                            };

                            case '°F' : {
                                outputValue.value = (number * 9/5) + 32;
                                break;
                            };

                            case 'K' : {
                                outputValue.value = number + 273.15;
                                break;
                            };
                        };
                        break;
                    };

                    case '°F' : {
                        switch(outputUnitList.value) {
                            case '°C' : {
                                outputValue.value = (number - 32) * 5/9;
                                break;
                            };

                            case '°F' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'K' : {
                                outputValue.value = (number - 32) * 5/9 + 273.15;
                                break;
                            };
                        };
                        break;
                    };

                    case 'K' : {
                        switch(outputUnitList.value) {
                            case '°C' : {
                                outputValue.value = number - 273.15;
                                break;
                            };

                            case '°F' : {
                                outputValue.value = (number - 273.15) * 9/5 + 32;
                                break;
                            };

                            case 'K' : {
                                outputValue.value = number;
                                break;
                            };
                        };
                        break;
                    };
                };
                break;
            };
            
            case 'speed' : {
                switch(inputUnitList.value) {
                    case 'km/h' : {
                        switch(outputUnitList.value) {
                            case 'km/h' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'mph' : {
                                outputValue.value = number / 1.609;
                                break;
                            };

                            case 'm/s' : {
                                outputValue.value = number / 3.6;
                                break;
                            };
                        };
                        break;
                    };

                    case 'mph' : {
                        switch(outputUnitList.value) {
                            case 'km/h' : {
                                outputValue.value = number * 1.609;
                                break;
                            };

                            case 'mph' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'm/s' : {
                                outputValue.value = number / 2.237;
                                break;
                            };
                        };
                        break;
                    };

                    case 'm/s' : {
                        switch(outputUnitList.value) {
                            case 'km/h' : {
                                outputValue.value = number * 3.6;
                                break;
                            };

                            case 'mph' : {
                                outputValue.value = number * 2.237;
                                break;
                            };

                            case 'm/s' : {
                                outputValue.value = number;
                                break;
                            };
                        };
                        break;
                    };
                };
                break;
            };

            case 'mass' : {
                switch(inputUnitList.value) {
                    case 'g' : {
                        switch(outputUnitList.value) {
                            case 'g' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'kg' : {
                                outputValue.value = number / 1000;
                                break;
                            };

                            case 'oz' : {
                                outputValue.value = number / 28.349523125;
                                break;
                            };

                            case 'lb' : {
                                outputValue.value = number / 453.59237;
                                break;
                            };
                        };
                        break;
                    };

                    case 'kg' : {
                        switch(outputUnitList.value) {
                            case 'g' : {
                                outputValue.value = number * 1000;
                                break;
                            };

                            case 'kg' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'oz' : {
                                outputValue.value = number / 0.028349523125;
                                break;
                            };

                            case 'lb' : {
                                outputValue.value = number / 0.45359237;
                                break;
                            };
                        };
                        break;
                    };

                    case 'oz' : {
                        switch(outputUnitList.value) {
                            case 'g' : {
                                outputValue.value = number * 28.349523125;
                                break;
                            };

                            case 'kg' : {
                                outputValue.value = number * 0.028349523125;
                                break;
                            };

                            case 'oz' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'lb' : {
                                outputValue.value = number / 16;
                                break;
                            };
                        };
                        break;
                    };

                    case 'lb' : {
                        switch(outputUnitList.value) {
                            case 'g' : {
                                outputValue.value = number * 453.59237;
                                break;
                            };

                            case 'kg' : {
                                outputValue.value = number * 0.45359237;
                                break;
                            };

                            case 'oz' : {
                                outputValue.value = number * 16;
                                break;
                            };

                            case 'lb' : {
                                outputValue.value = number;
                                break;
                            };
                        };
                    };
                };
                break;
            };

            case 'length' : {
                switch(inputUnitList.value) {
                    case 'cm' : {
                        switch(outputUnitList.value) {
                            case 'cm' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'm' : {
                                outputValue.value = number / 100;
                                break;
                            };

                            case 'km' : {
                                outputValue.value = number / 100000;
                                break;
                            };

                            case 'in' : {
                                outputValue.value = number / 2.54;
                                break;
                            };

                            case 'ft' : {
                                outputValue.value = number / 30.48;
                                break;
                            };

                            case 'yd' : {
                                outputValue.value = number / 91.44;
                                break;
                            };

                            case 'mi' : {
                                outputValue.value = number / 160934.4;
                                break;
                            };
                        };
                        break;
                    };

                    case 'm' : {
                        switch(outputUnitList.value) {
                            case 'cm' : {
                                outputValue.value = number * 100;
                                break;
                            };

                            case 'm' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'km' : {
                                outputValue.value = number / 1000;
                                break;
                            };

                            case 'in' : {
                                outputValue.value = number / 0.0254;
                                break;
                            };

                            case 'ft' : {
                                outputValue.value = number / 0.3048;
                                break;
                            };

                            case 'yd' : {
                                outputValue.value = number / 0.9144;
                                break;
                            };

                            case 'mi' : {
                                outputValue.value = number / 1609.344;
                                break;
                            };
                        };
                        break;
                    };

                    case 'km' : {
                        switch(outputUnitList.value) {
                            case 'cm' : {
                                outputValue.value = number * 100000;
                                break;
                            };

                            case 'm' : {
                                outputValue.value = number * 1000;
                                break;
                            };

                            case 'km' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'in' : {
                                outputValue.value = number / 0.0000254;
                                break;
                            };

                            case 'ft' : {
                                outputValue.value = number / 0.0003048;
                                break;
                            };

                            case 'yd' : {
                                outputValue.value = number / 0.0009144;
                                break;
                            };

                            case 'mi' : {
                                outputValue.value = number / 1.609344;
                                break;
                            };
                        };
                        break;
                    };

                    case 'in' : {
                        switch(outputUnitList.value) {
                            case 'cm' : {
                                outputValue.value = number * 2.54;
                                break;
                            };

                            case 'm' : {
                                outputValue.value = number * 0.0254;
                                break;
                            };

                            case 'km' : {
                                outputValue.value = number * 0.0000254;
                                break;
                            };

                            case 'in' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'ft' : {
                                outputValue.value = number / 12;
                                break;
                            };

                            case 'yd' : {
                                outputValue.value = number / 36;
                                break;
                            };

                            case 'mi' : {
                                outputValue.value = number / 63360;
                                break;
                            };
                        };
                        break;
                    };

                    case 'ft' : {
                        switch(outputUnitList.value) {
                            case 'cm' : {
                                outputValue.value = number * 30.48;
                                break;
                            };

                            case 'm' : {
                                outputValue.value = number * 0.3048;
                                break;
                            };

                            case 'km' : {
                                outputValue.value = number * 0.0003048;
                                break;
                            };

                            case 'in' : {
                                outputValue.value = number * 12;
                                break;
                            };

                            case 'ft' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'yd' : {
                                outputValue.value = number / 3;
                                break;
                            };

                            case 'mi' : {
                                outputValue.value = number / 5280;
                                break;
                            };
                        };
                        break;
                    };

                    case 'yd' : {
                        switch(outputUnitList.value) {
                            case 'cm' : {
                                outputValue.value = number * 91.44;
                                break;
                            };

                            case 'm' : {
                                outputValue.value = number * 0.9144;
                                break;
                            };

                            case 'km' : {
                                outputValue.value = number * 0.0009144;
                                break;
                            };

                            case 'in' : {
                                outputValue.value = number * 36;
                                break;
                            };

                            case 'ft' : {
                                outputValue.value = number * 3;
                                break;
                            };

                            case 'yd' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'mi' : {
                                outputValue.value = number / 1760;
                                break;
                            };
                        };
                        break;
                    };

                    case 'mi' : {
                        switch(outputUnitList.value) {
                            case 'cm' : {
                                outputValue.value = number * 160934.4;
                                break;
                            };

                            case 'm' : {
                                outputValue.value = number * 1609.344;
                                break;
                            };

                            case 'km' : {
                                outputValue.value = number * 1.609344;
                                break;
                            };

                            case 'in' : {
                                outputValue.value = number * 63360;
                                break;
                            };

                            case 'ft' : {
                                outputValue.value = number * 5280;
                                break;
                            };

                            case 'yd' : {
                                outputValue.value = number * 1760;
                                break;
                            };

                            case 'mi' : {
                                outputValue.value = number;
                                break;
                            };
                        };
                        break;
                    };
                };
                break;
            };

            case 'volume' : {
                switch(inputUnitList.value) {
                    case 'mL' : {
                        switch(outputUnitList.value) {
                            case 'mL' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'L' : {
                                outputValue.value = number / 1000;
                                break;
                            };

                            case 'fl oz' : {
                                outputValue.value = number / 29.5735295625;
                                break;
                            };

                            case 'pt' : {
                                outputValue.value = number / 473.176473;
                                break;
                            };

                            case 'qt' : {
                                outputValue.value = number / 946.352946;
                                break;
                            };

                            case 'gal' : {
                                outputValue.value = number / 3785.411784;
                                break;
                            };
                        };
                        break;
                    };

                    case 'L' : {
                        switch(outputUnitList.value) {
                            case 'mL' : {
                                outputValue.value = number * 1000;
                                break;
                            };

                            case 'L' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'fl oz' : {
                                outputValue.value = number / 0.0295735295625;
                                break;
                            };

                            case 'pt' : {
                                outputValue.value = number / 0.473176473;
                                break;
                            };

                            case 'qt' : {
                                outputValue.value = number / 0.946352946;
                                break;
                            };

                            case 'gal' : {
                                outputValue.value = number / 3.785411784;
                                break;
                            };
                        };
                        break;
                    };

                    case 'fl oz' : {
                        switch(outputUnitList.value) {
                            case 'mL' : {
                                outputValue.value = number * 29.5735295625;
                                break;
                            };

                            case 'L' : {
                                outputValue.value = number * 0.0295735295625;
                                break;
                            };

                            case 'fl oz' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'pt' : {
                                outputValue.value = number / 16;
                                break;
                            };

                            case 'qt' : {
                                outputValue.value = number / 32;
                                break;
                            };

                            case 'gal' : {
                                outputValue.value = number / 128;
                                break;
                            };
                        };
                        break;
                    };

                    case 'pt' : {
                        switch(outputUnitList.value) {
                            case 'mL' : {
                                outputValue.value = number * 473.176473;
                                break;
                            };

                            case 'L' : {
                                outputValue.value = number * 0.473176473;
                                break;
                            };

                            case 'fl oz' : {
                                outputValue.value = number * 16;
                                break;
                            };

                            case 'pt' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'qt' : {
                                outputValue.value = number / 2;
                                break;
                            };

                            case 'gal' : {
                                outputValue.value = number / 8;
                                break;
                            };
                        };
                        break;
                    };

                    case 'qt' : {
                        switch(outputUnitList.value) {
                            case 'mL' : {
                                outputValue.value = number * 946.352946;
                                break;
                            };

                            case 'L' : {
                                outputValue.value = number * 0.946352946;
                                break;
                            };

                            case 'fl oz' : {
                                outputValue.value = number * 32;
                                break;
                            };

                            case 'pt' : {
                                outputValue.value = number * 2;
                                break;
                            };

                            case 'qt' : {
                                outputValue.value = number;
                                break;
                            };

                            case 'gal' : {
                                outputValue.value = number / 4;
                                break;
                            };
                        };
                        break;
                    };

                    case 'gal' : {
                        switch(outputUnitList.value) {
                            case 'mL' : {
                                outputValue.value = number * 3785.411784;
                                break;
                            };

                            case 'L' : {
                                outputValue.value = number * 3.785411784;
                                break;
                            };

                            case 'fl oz' : {
                                outputValue.value = number * 128;
                                break;
                            };

                            case 'pt' : {
                                outputValue.value = number * 8;
                                break;
                            };

                            case 'qt' : {
                                outputValue.value = number * 4;
                                break;
                            };

                            case 'gal' : {
                                outputValue.value = number;
                                break;
                            };
                        };
                        break;
                    };
                };
                break;
            };
        }
    } else {
        outputValue.value = '';
    }
}


// Fonction d'ajout d'options dans les select

function addSelectOptions(v, i) {
    inputUnitList[i] = new Option (v, v);
    outputUnitList[i] = new Option (v, v);
}


// Fonction mise à jour des listes select

function updateUnitLists() {
    const lengthUnits = ['cm', 'm', 'km', 'in', 'ft', 'yd', 'mi'];
    const temperatureUnits = ['°C', '°F', 'K'];
    const massUnits = ['g', 'kg', 'oz', 'lb'];
    const speedUnits = ['km/h', 'mph', 'm/s'];
    const volumeUnits = ['mL', 'L', 'fl oz', 'pt', 'qt', 'gal'];

    var currentCategory = categoryList.value;

    inputUnitList.length = 0;
    outputUnitList.length = 0;

    switch (currentCategory) {
        case 'temperature' : {
            temperatureUnits.forEach(addSelectOptions);
            convertValue();
            break;
        };

        case 'speed' : {
            speedUnits.forEach(addSelectOptions);
            convertValue();
            break;
        };

        case 'mass' : {
            massUnits.forEach(addSelectOptions);
            convertValue();
            break;
        };

        case 'length' : {
            lengthUnits.forEach(addSelectOptions);
            convertValue();
            break;
        };

        case 'volume' : {
            volumeUnits.forEach(addSelectOptions);
            convertValue();
            break;
        };
    }
}


// Fonction mise à jour liste Catégorie

function loadCategoryList() {
    const categories = [['Température', 'temperature'], ['Vitesse', 'speed'], ['Masse', 'mass'], ['Longueur', 'length'], ['Volume', 'volume']];
    
    categories.sort().forEach(function(v, i) {
        categoryList[i] = new Option (v[0], v[1]);
    });
    
    updateUnitLists();
}


// Ecouteurs d'événements

inputUnitList.addEventListener('input', convertValue);

inputValue.addEventListener('input', convertValue);

outputUnitList.addEventListener('input', convertValue);

categoryList.addEventListener('input', updateUnitLists);

if(document.readyState !== 'loading') {
    loadCategoryList();
} else {
    document.addEventListener('DOMContentLoaded', loadCategoryList);
}
