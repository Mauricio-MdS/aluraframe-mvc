class NegociacoesView{

    constructor(elemento){

        this._elemento = elemento;

    }


    // TO DO HERE
    _template(model){
        return `
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${model.map( item => `
                    <tr>   
                        <td>${DateHelper.dataParaTexto(item.data)}</td>
                        <td>${item.quantidade}</td>
                        <td>${item.valor}</td>
                        <td>${item.volume}</td>
                    </tr>`).join('')} 
            </tbody>
            <tfooter>
                <tr>
                    <td colspan = '3'></td>
                    <td>${model.reduce( (total, item) => total += item.volume, 0)}</td>
                </tr>
            </tfooter>`;   
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }

}