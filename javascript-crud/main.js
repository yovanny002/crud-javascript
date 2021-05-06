let app = new function() {
  this.el = document.getElementById('ciudades');
  this.ciudades = [];
  this.Count = function(data) {
    let el   = document.getElementById('contador');
    let name = 'ciudad';
    if (data) {
      if (data > 1) {
        name = 'ciudades';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };
  
  this.FetchAll = function() {
    let data = '';
    if (this.ciudades.length > 0) {
      for (i = 0; i < this.ciudades.length; i++) {
        data += '<tr>';
        data += '<td>' + this.ciudades[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')">Editar</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Borrar</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.ciudades.length);
    return this.el.innerHTML = data;
  };
  this.Add = function () {
    el = document.getElementById('add-name');
    let ciudad = el.value;
    if (ciudad) {
      this.ciudades.push(ciudad.trim());
      el.value = '';
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    let el = document.getElementById('edit-name');
    el.value = this.ciudades[item];
      document.getElementById('modificacion').style.display = 'block';
    self = this;
      document.getElementById('guardar_ediccion').onsubmit = function() {
      let ciudad = el.value;
      if (ciudad) {
          self.ciudades.splice(item, 1, ciudad.trim());
        self.FetchAll();
        CloseInput();
      }
    }
  };
  this.Delete = function (item) {
    this.ciudades.splice(item, 1);
    this.FetchAll();
  };
  
}
app.FetchAll();
function CloseInput() {
  document.getElementById('modificacion').style.display = 'none';
}