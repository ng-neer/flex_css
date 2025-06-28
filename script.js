const properties_1 = {
    container: {
        display: 'block',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'stretch'
    },
    item: {
        alignSelf: 'stretch',
        order: 0,
        marginLeft: 0,
        marginTop: 0
    }
};

const properties_2 = {
    container: {
        flexWrap: 'wrap',
        alignContent: 'stretch'
    },
    item: {}
};

function calcStyle() {
    ['display', 'flex-direction', 'justify-content', 'align-items'].forEach(elName => {
        document.querySelector(`#input_${elName}_fieldset`).addEventListener('click', (d) => {
            jsName = changeFromCSSToJSStyle(elName);
            properties_1.container[jsName] = d.target.value;
            setStyle('container_1', jsName);
        });
    });
    ['align-self', 'order', 'margin-left', 'margin-left', 'margin-top'].forEach(elName => {
        document.querySelector(`#input_${elName}_fieldset`).addEventListener('click', (d) => {
            jsName = changeFromCSSToJSStyle(elName);
            properties_1.item[jsName] = d.target.value;
            setStyle('item_1', jsName);
        });
    });
    ['flex-wrap', 'justify-content', 'align-content'].forEach(elName => {
        document.querySelector(`#input_${elName}_fieldset_2`).addEventListener('click', (d) => {
            jsName = changeFromCSSToJSStyle(elName);
            properties_2.container[jsName] = d.target.value;
            setStyle('container_2', jsName);
        });
    });
}

function setStyle(objName, attribute) {
    switch (objName) {
        case 'container_1':
            const containerView = document.querySelector('.container_view')
            containerView.style[attribute] = properties_1.container[attribute];
            break;
        case 'item_1':
            const itemView = document.querySelector('.div-p1-2');
            itemView.style[attribute] = properties_1.item[attribute];
            break;
        case 'container_2':
            const containerView2 = document.querySelector('.container_view_2')
            containerView2.style[attribute] = properties_2.container[attribute];
            break;
    }
}

function changeFromCSSToJSStyle(name) {
    name = name.split('-');
    if (name.length === 1) {
        return name[0];
    } else {
        let res;
        name.forEach((n, i) => {
            if (i === 0) {
                res = n;
            } else {
                res += name[i].charAt(0).toUpperCase() + name[i].slice(1);
            }
        });
        return res;
    }
}

// disable controls if not flex
const displaySelect = document.getElementById('input_display_fieldset');
const flexDirectionSelect = document.getElementById('input_flex-direction_fieldset');
const withFlex = document.querySelectorAll('.with-flex');

function updateFlexDirectionState() {
  const isFlex = displaySelect.value === 'flex';
  flexDirectionSelect.disabled = !isFlex;

  withFlex.forEach(el => {
    el.disabled = !isFlex;
  })
}

displaySelect.addEventListener('change', () => {
  updateFlexDirectionState();
});

updateFlexDirectionState();
calcStyle();