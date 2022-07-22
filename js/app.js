(function() {

    // Задаем необходимые переменные
    const burger = document.querySelector(".burger")
    const asideClose = document.querySelector(".aside-close")
    let aside = document.querySelector('.aside')
    const employeesForm = document.getElementById('employees-form')
    const name = document.querySelector("input[name='name']")
    const years = document.querySelector("input[name='years']")
    const competence = document.querySelector(".table__input--textarea")
    const tableContent = document.querySelector(".table__content")
    const tableBtnSend = document.querySelector(".btn__send")
    const tableBtnAdd = document.querySelector(".btn__add")
    
    // Функция Валидации ФИО
    function validName() {
        const regName = /^[А-Я][а-яА-Я\-]{0,}\s[А-Я][а-яА-Я\-]{1,}(\s[А-Я][а-яА-Я\-]{1,})?$/
        
        if(!regName.test(name.value)) {
            name.classList.add('error')
            name.parentNode.classList.add('error--name')
        } else {
            name.classList.remove('error')
            name.parentNode.classList.remove('error--name')
        }

        if(name.value === '') {
            name.classList.remove('error')
            name.parentNode.classList.remove('error--name')
        }
    }

    // Функция Валидации Числа лет
    function validNumber() {
        const regNumber = /^\d{2,2}$/

        if(!regNumber.test(years.value) || years.value < 18 || years.value > 65 ) {
            years.classList.add('error')
            years.parentNode.classList.add('error--number')
        } else {
            years.classList.remove('error')
            years.parentNode.classList.remove('error--number')
        }

        if(years.value === '') {
            years.classList.remove('error')
            years.parentNode.classList.remove('error--number')
        }
    }

    // Функция Валидации Компетенциии
    function validСompetence() {
        const regСompetence = /^[а-яА-Я\-]{4,30}$/

        if(!regСompetence.test(competence.value)) {
            competence.classList.add('error')
            competence.parentNode.classList.add('error--competence')
        } else {
            competence.classList.remove('error')
            competence.parentNode.classList.remove('error--competence')
        }

        if(competence.value === '') {
            competence.classList.remove('error')
            competence.parentNode.classList.remove('error--competence')
        }
    }

    // Функция для обработки данных с формы 
    function serializeForm(formNode) {
        const { elements } = formNode
        const data = Array.from(elements)
            .filter((item) => !!item.name)
            .map((element) => {
            const { name, value } = element
            return { name, value }
        })
        return data
    }

    // Функция для удаления строки
    function deleteRow() {
        const tableBtnDelete = document.querySelectorAll(".btn__delete")
        tableBtnDelete.forEach((elem) => {
            elem.addEventListener('click', function() {
                elem.parentNode.parentNode.remove()
            })
        })
    }

    // Функция для получения данных с формы
    function handleFormSubmit(event) {
        //Отключаем перезагрузку при отправке формы
        event.preventDefault()

        // Получаем данные с формы
        let content = serializeForm(employeesForm)
        // Переменная для проверки пустых строк 
        let i = 0
        // Проверка пустых строк
        content.forEach((elem) => {
            if(elem.value === '') i++
        })

        // Вывод полученных данных в DOM дерево
        if(i === 0) {
            tableBtnAdd.classList.remove('error--filling')
            if(document.querySelector('.error') === null) {
                tableBtnAdd.classList.remove('error--send')
                tableContent.innerHTML += `
                <ul class="table__row data">
                    <li class="table__col">${content[0].value}</li>
                    <li class="table__col">${content[1].value}</li>
                    <li class="table__col">${content[2].value}</li>
                    <li class="table__col">${content[3].value}</li>
                    <li class="table__del">
                        <button class="btn btn__delete" type="button">
                            <i class="btn__icon icon-cancel-1"></i>
                        </button>
                    </li>
                </ul>
                `;
                employeesForm.reset()
            } else {
                tableBtnAdd.classList.add('error--send')
            }
        } else {
            tableBtnAdd.classList.add('error--filling')
        }
        // Удаления строки
        deleteRow()

    }

    // Функция для записи строк в массив
    function sendDataEmployees() {
        const tableRow = document.querySelectorAll(".data")
        let arr = []
        tableRow.forEach((elem) => {
            
            let obj = {}

            obj.name = elem.children[0].textContent
            obj.position = elem.children[1].textContent
            obj.years = elem.children[2].textContent
            obj.competence = elem.children[3].textContent

            arr.push(obj)
        })
        if(arr.length === 0) {
            tableBtnSend.classList.add('error--main-send')
        } else {
            tableBtnSend.classList.remove('error--main-send')
            return console.log(JSON.stringify(arr))
        }
        
    }

    // Обработчик загрузки DOM дерево
    document.addEventListener('DOMContentLoaded', function() {

        // Открытия меню
        burger.addEventListener('click', function() {
            aside.classList.add('aside--on')
        })

        // Закрытия меню
        asideClose.addEventListener('click', function() {
            aside.classList.remove('aside--on')
        })
        
        // Проверка Валидации ФИО
        name.addEventListener('input', validName)

        // Проверка лет
        years.addEventListener('input', validNumber)

        // Проверка Компетенциии
        competence.addEventListener('input', validСompetence)

        // Получение данных с формы 
        employeesForm.addEventListener('submit', handleFormSubmit)

        // Отправка данных на сервер
        tableBtnSend.addEventListener('click', sendDataEmployees)

    });
})();

