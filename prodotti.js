// Versione 2.0 - Catalogo Prodotti con Reparti Fiscali
const prodotti = [
    // BAR & VINI -> Reparto RIST
    { nome: 'Acqua Nat 1L', prezzo: 2.50, cat: 'bar', reparto: 'RIST', colore: 'azzurro' },
    { nome: 'Coca Cola', prezzo: 3.50, cat: 'bar', reparto: 'RIST', colore: 'azzurro' },
    { nome: 'Birra Media', prezzo: 5.00, cat: 'bar', reparto: 'RIST', colore: 'arancione' },
    { nome: 'Rosso 1L', prezzo: 15.00, cat: 'vini', reparto: 'RIST', colore: 'rosso' },
    { nome: 'Bianco 1L', prezzo: 15.00, cat: 'vini', reparto: 'RIST', colore: 'arancione' },
    { nome: 'Prosecco Calice', prezzo: 5.00, cat: 'vini', reparto: 'RIST', colore: 'azzurro' },

    // CUCINA -> Reparto RIST
    { nome: 'Tagliere Misto', prezzo: 12.00, cat: 'antipasti', reparto: 'RIST', colore: 'rosso' },
    { nome: 'Bruschette', prezzo: 6.00, cat: 'antipasti', reparto: 'RIST', colore: 'rosso' },
    { nome: 'Carbonara', prezzo: 12.00, cat: 'primi', reparto: 'RIST', colore: 'verde' },
    { nome: 'Amatriciana', prezzo: 11.00, cat: 'primi', reparto: 'RIST', colore: 'verde' },
    { nome: 'Gnocchi Sorentina', prezzo: 10.00, cat: 'primi', reparto: 'RIST', colore: 'verde' },
    { nome: 'Tagliata Manzo', prezzo: 18.00, cat: 'secondi', reparto: 'RIST', colore: 'rosso' },
    { nome: 'Grigliata Mista', prezzo: 20.00, cat: 'secondi', reparto: 'RIST', colore: 'rosso' },
    { nome: 'Orata al forno', prezzo: 16.00, cat: 'secondi', reparto: 'RIST', colore: 'azzurro' },
    { nome: 'Patate Fritte', prezzo: 4.50, cat: 'contorni', reparto: 'RIST', colore: 'arancione' },
    { nome: 'Insalata Mista', prezzo: 4.00, cat: 'contorni', reparto: 'RIST', colore: 'verde' },
    { nome: 'Tiramisù', prezzo: 6.00, cat: 'dolci', reparto: 'RIST', colore: 'arancione' },
    { nome: 'Panna Cotta', prezzo: 5.00, cat: 'dolci', reparto: 'RIST', colore: 'arancione' },

    // CAFFE & AMARI -> Reparto RIST
    { nome: 'Espresso', prezzo: 1.50, cat: 'caffe', reparto: 'RIST', colore: 'viola' },
    { nome: 'Macchiato', prezzo: 1.60, cat: 'caffe', reparto: 'RIST', colore: 'viola' },
    { nome: 'Limoncello', prezzo: 3.50, cat: 'amari', reparto: 'RIST', colore: 'arancione' },
    { nome: 'Amaro Lucano', prezzo: 4.00, cat: 'amari', reparto: 'RIST', colore: 'rosso' },
    { nome: 'Grappa Bianca', prezzo: 4.50, cat: 'amari', reparto: 'RIST', colore: 'azzurro' },

    // CAMERE -> Reparto CAME o TASS
    { nome: 'Pernottamento', prezzo: 0.00, cat: 'camere', reparto: 'CAME', colore: 'viola' },
    { nome: 'Tassa Soggiorno', prezzo: 2.00, cat: 'camere', reparto: 'TASS', colore: 'rosso' }
];