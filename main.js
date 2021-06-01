// ELEMENTOS HTML
const anoOpen = document.querySelector(".btn-open-year");
const anoSelect = document.querySelector(".select-year");

const mesSlide = document.querySelector(".btn-slide-month");
const mesOpen = document.querySelector(".btn-open-month");
const mesSelect = document.querySelector(".select-month");

const descCont = document.querySelector(".desc");
const diasCont = document.querySelector(".dias");

// CONSTANTES
const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

const diasSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
];

const currentDate = new Date(); // <- Current date
const anoAtual = currentDate.getFullYear();
const mesAtual = currentDate.getMonth();
const diaAtual = currentDate.getDate();

// VARIÁVEIS
var ano = currentDate.getFullYear();
var mes = currentDate.getMonth();
var dia = currentDate.getDate();

var firstWeekDay;

// CHAMADAS
// Set
setAno(ano);
setMes(mes);
// Render
renderAnos();
renderMeses();
renderDiasSemana();

// FUNÇÕES

// Setters

/**
 * Alterar ano.
 * @param {number} novoAno novo ano.
 */
function setAno(novoAno)
{
    ano = novoAno;
    anoOpen.innerHTML = ano;

    renderDias();
}

/**
 * Alterar mês.
 * @param {number} novoMes novo mês.
 */
function setMes(novoMes)
{
    mes = novoMes;
    mesOpen.innerHTML = meses[mes];
    
    renderDias();
}

/**
 * Pular para outro mês.
 * Exemplo:
 * Mês atual = Janeiro (1);
 * desloc = 2;
 * Novo mês = Março (3).
 * @param {number} desloc Tamanho do pulo para o próximo mês.
 */
function slideMes(desloc)
{
    var novoMes = mes + desloc;

    if(novoMes > meses.length - 1)
    {
        novoMes = 0;
        setAno(ano + 1);
    }
    if(novoMes < 0)
    {
        novoMes = meses.length - 1;
        setAno(ano - 1);
    }
        
    setMes(novoMes);
}

/**
 * Alterar ano e mês para a data atual
 */
function goToToday()
{
    setAno(anoAtual);
    setMes(mesAtual);

    renderDias();
}

// Renders

/**
 * Carregar anos à lista
 */
function renderAnos()
{
    for(var i = anoAtual - 120; i <= anoAtual + 120; i++)
        anoSelect.innerHTML +=
            `<li><button type="button" class="btn-primary btn-ano ano-${i}" onclick="setAno(${i})">${i}</button></li>`;
}

/**
 * Carregar meses à lista
 */
function renderMeses()
{
    for(var i = 0; i < meses.length; i++)
        mesSelect.innerHTML +=
            `<li><button type="button" class="btn-primary mes-${i}" onclick="setMes(${i})">${meses[i]}</button></li>`;
}

/**
 * Carregar dias da semana
 */
function renderDiasSemana()
{
    for(var i = 0; i < 7; i++)
        descCont.innerHTML += `
            <div class="box-dia-semana">
                <div class="dia-semana">${diasSemana[i]}</div>
            </div>`;
}

/**
 * Carregar dias do mês
 */
function renderDias()
{
    let firstDay = new Date(ano, mes, 1);
    firstWeekDay = firstDay.getDay();

    let lastDay = new Date(ano, mes + 1, 0).getDate();

    diasCont.innerHTML = "";

    // Ajustar dias do mês aos dias da semana
    for(var i = 0; i < firstWeekDay; i++)
        diasCont.innerHTML +=
            `<div class="dia-null"></div>`;
    
    // Dias do mês
    for(var i = 1; i <= lastDay; i++)
    {
        diasCont.innerHTML += `
            <div class="dia-box">
                <div class="dia dia-${i}">
                    <span class="num">${i}</span>
                </div>
            </div>`;
    }
    
    // Setar borda ao dia atual
    if(anoAtual === ano
    && mesAtual === mes)
        document.querySelector(`.dia-${diaAtual}`).classList.add("dia-atual");

    // !!! APAGAR !!!
    /*
    document.querySelector(`.dia-25`).innerHTML += `
        <span class='qtd-tarefas'>3</span>
    `;
    */
}

//const el = document.querySelector('#myScrollbox');
//el.scrollTop = 0;