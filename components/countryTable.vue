<template>
  <div class="container container-table dt[-head|-body]-center" style="padding-bottom: 150px;">
    <h4><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
<g>
	<path style="fill:#03AA6F;" d="M441.374,79.519l-26.485,17.656l-44.141-8.828l-26.485-8.828l-35.313,8.828l-26.485-8.828
		l17.656-35.313h35.313l34.607-17.303C396.73,40.101,420.875,57.916,441.374,79.519z"/>
	<path style="fill:#03AA6F;" d="M238.325,44.206l-8.828,26.485l-26.485,8.828l-26.485,44.141l-44.141,26.485l-61.797,8.828v26.485
		l17.656,17.656v35.313L61.762,220.77l-26.485-17.656l-15.361-46.171C46.356,93.935,96.898,44.126,160.284,18.604l25.072,16.774
		L238.325,44.206z"/>
	<polygon style="fill:#03AA6F;" points="255.982,291.395 247.154,335.536 211.841,370.849 211.841,397.334 176.528,423.818 
		176.528,467.959 150.044,459.131 132.387,414.99 132.387,326.708 88.246,317.88 70.59,282.567 70.59,256.082 88.246,238.426 
		114.731,211.941 132.387,247.254 194.184,247.254 220.669,291.395 	"/>
	<path style="fill:#03AA6F;" d="M479.335,130.987c48.193,85.978,42.702,191.996-14.125,272.526l-23.836-23.836v-35.313
		l-17.656-35.313l-17.656-35.313v-35.313l-26.485-17.656l-35.313,8.828l-61.797-26.485l-8.828-61.797l26.485-26.485h52.969
		l17.656,26.485l52.969,8.828l52.969-17.656L479.335,130.987z"/>
</g>
<path style="fill:#86DAF1;" d="M308.951,88.347l35.313-8.828l26.485,8.828l44.141,8.828l26.485-17.656
	c14.787,15.476,27.544,32.77,37.961,51.468l-2.648,1.501l-52.969,17.656l-52.969-8.828l-17.656-26.485h-52.969l-26.485,26.485
	l8.828,61.797l61.797,26.485l35.313-8.828l26.485,17.656v35.313l17.656,35.313l17.656,35.313v35.313l23.836,23.836
	c-81.528,115.526-241.275,143.079-356.792,61.55C10.311,395.815-26.494,267.691,19.916,156.942l15.361,46.171l26.485,17.656
	l26.485,17.656L70.59,256.082v26.485l17.656,35.313l44.141,8.828v88.282l17.656,44.141l26.485,8.828v-44.141l35.313-26.485v-26.485
	l35.313-35.313l8.828-44.141h-35.313l-26.485-44.141h-61.797l-17.656-35.313l-26.485,26.485v-35.313L70.59,185.457v-26.485
	l61.797-8.828l44.141-26.485l26.485-44.141l26.485-8.828l8.828-26.485l-52.969-8.828l-25.072-16.774
	c67.889-27.341,144.235-24.322,209.758,8.299l-34.607,17.303h-35.313l-17.656,35.313L308.951,88.347z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>Country Affected</h4>
    <table id="Table" class="table" width="100%">
      <thead>
        <tr class="bg-info">
          <th>Country</th>
          <th>Cases</th>
          <th>Deaths</th>
          <th>Critical</th>
          <th>Recovered</th>
        </tr>
      </thead>
      
      <tbody id="myTable">
        
      </tbody>
      
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "countryTable",
  data(){
    return {
      info: []
    } 
  },
  mounted() {
    var self = this;
    axios.get('https://disease.sh/v3/covid-19/countries')
    .then( function(resp) {
      self.info = resp.data;
      //console.log('Data: ', resp.data);
      var t = $('#Table').DataTable({
        data: self.info,
        "columns": [
        {
          "render": function (data, type, JsonResultRow, meta) {
              return '<span class="Tcounrty"><img class="Timg" src="'+JsonResultRow.countryInfo.flag+'">'+JsonResultRow.country+'</span>';
          }
        },
        {
          "render": function (data, type, JsonResultRow, meta) {
              return '<span>'+new Intl.NumberFormat('ja-JP').format(Number(JsonResultRow.cases))+'</span>';
          },
          data: "todayCases"
        },
        {
          "render": function (data, type, JsonResultRow, meta) {
              return '<span class="deaths">'+new Intl.NumberFormat('ja-JP').format(Number(JsonResultRow.deaths))+'</span>';
          }
        },
        {
          "render": function (data, type, JsonResultRow, meta) {
              return '<span>'+new Intl.NumberFormat('ja-JP').format(Number(JsonResultRow.critical))+'</span>';
          }
        },
        {
          "render": function (data, type, JsonResultRow, meta) {
              return '<span class="recovered">'+new Intl.NumberFormat('ja-JP').format(Number(JsonResultRow.recovered))+'</span>';
          }
        },
      ],
      "order": [[ 1, 1]],
      responsive: true,
      "sScrollX": "110%",
      "bLengthChange": false,
      })
    })
    .catch( function(error) {
      console.log('Error: ', error);
    })
  }
}
</script>

<style>

.container-table {
  padding-top: 150px !important;
}

svg {
  width: 40px;
  height: auto;
  margin-right: 10px;
}

.container-table h4 {
  display: flex;
  align-items: center;
  font-size: 34px;
  margin-bottom: 50px;
}

.dataTables_wrapper .dataTables_filter {
  float: none ;
  text-align: left;
}

.dataTables_wrapper .dataTables_filter input {
  height: 2rem;
  border-radius: 6px;
  border: 1px lightgrey solid;
  outline: none;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  font-family: 'Calibre Web', sans-serif;
  font-size: 16px;
}

table {
  padding: .5rem;
  margin: 0px !important;
  width: 100%;
  /* margin-bottom: 2rem !important; */
}

table.dataTable.no-footer {
  background: #fff;
  box-shadow: 0 0 25px 0 rgba(73,80,87,.10);
  /* border-radius: 0.5rem; */

}

.dataTables_wrapper .dataTables_scroll {
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 2rem !important;
  box-shadow: 0 0 25px 0 rgba(73,80,87,.10);
}

.dataTables_wrapper.no-footer .dataTables_scrollBody {
  border-bottom: 0;
}

table.dataTable {
  border-spacing: 0.2rem;
}

.Tcounrty {
  display: flex;
  align-items: center;
  color: #666;
}

.Timg {
  height: 1rem;
  width: 1.5rem;
  border-radius: 2px;
  display: inline-block;
  margin-right: 5px;
}

table.dataTable tbody tr {
  margin-bottom: 0.5rem;
}

table.dataTable thead th, table.dataTable thead td {
  border-bottom: 0px solid #DDDDDD;
}

table.dataTable.no-footer {
  border-bottom: 0px solid #DDDDDD;
}

table.dataTable tbody th, table.dataTable tbody td {
  padding: 0;
  
}

table.dataTable tbody th, table.dataTable tbody span {
  padding: 10px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  border-radius: 3px;
  letter-spacing: .3px;
  /* background: #f1f1f1; */
}

table.dataTable tbody th, table.dataTable tbody tr:hover span {
  background: #F6F6F6;
}

table.dataTable tbody th, table.dataTable tbody td:nth-child(1) span {
  justify-content: start;
}

table.dataTable tbody th, table.dataTable tbody tr {
  margin-bottom: 5px;
}

.dataTables_wrapper .dataTables_info {
  color: #666;
}

.recovered {
  color: green;
}

.deaths {
  color: red;
}

.dataTables_wrapper .dataTables_paginate .paginate_button.disabled {
  border: 1px solid #999;
}

.dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover {
  border: 1px solid #999;
}

.dataTables_wrapper .dataTables_paginate .paginate_button {
  border: 1px solid #999;
  padding: 0.3em 0.7em;
  background: transparent;
  margin-left: -1px;
  border-radius: 0;
  background: #fff;
}

.dataTables_wrapper .dataTables_paginate .ellipsis {
  padding: 0.3em 0.7em;
  border: 1px solid #999;
  margin-left: -1px;
  background: #fff;
}

#Table_previous {
  border-radius: 4px 0 0 4px;
}

#Table_next {
  border-radius: 0 4px 4px 0;
}

.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
  border: 1px solid #999;
  background: rgb(101, 113, 116);
}

.dataTables_wrapper .dataTables_paginate .paginate_button.current, .dataTables_wrapper .dataTables_paginate .paginate_button.current {
  border: 1px solid #999;
  background: rgb(101, 113, 116);
  color: #fff !important;
}

.dataTables_wrapper .dataTables_paginate .paginate_button.current, .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {
  border: 1px solid #999;
  background: rgb(101, 113, 116);
  color: #fff !important;
}

.dataTables_wrapper .dataTables_paginate .paginate_button:active {
  box-shadow: none;
  background: rgb(101, 113, 116);
}

.dataTables_wrapper .dataTables_paginate {
  padding-top: .50em;
}

</style>