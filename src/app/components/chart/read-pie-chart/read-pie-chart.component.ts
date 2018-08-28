import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'chart.piecelabel.js';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'read-pie-chart',
  templateUrl: './read-pie-chart.component.html',
  styleUrls: ['./read-pie-chart.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ReadPieChartComponent implements OnInit {

  public chartType:string = 'pie';
  
  public chartData = {
    legend: true,
    datasets:[{ 
      data: [1723,249],
    }],
    labels: ['Non AMR Consumer', 'AMR Consumer'],
    colors: [{
      backgroundColor: ['orange','green'],
      hoverBackgroundColor: ['gray','gray'],
      borderColor:['orange','green'],
      borderWidth:[2,2]
    }],
  }

  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'AMR Consumers count'
    },
    legend:{
      display: true,
      position: 'bottom',
      fullWidth: true,
      labels: {
        fontColor: 'rgb(255, 99, 132)',
        fontStyle: 'bold',
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 3000
    },
    pieceLabel: {
      render: 'percentage',//'value','label'
      fontColor: ['white', 'white'],
      fontStyle: 'bold',
      fontSize: 14,
      precision: 2,
      arc: false,
      overlap: true,
      position: 'border'//'outside'
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      // callbacks: {
      //   label: function(tooltipItem, data) {
      //     var dataset = data.datasets[tooltipItem.datasetIndex];
      //     var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
      //       return previousValue + currentValue;
      //     });
      //     var tooltipLabel = data.labels[tooltipItem.index];
      //     var currentValue = dataset.data[tooltipItem.index];
      //     var precentage = Math.floor(((currentValue/total) * 100)+0.5);         
      //     return tooltipLabel + " " + precentage + "%";
      //   }
      // }
    }
  };

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
   
  chartClicked(e:any):void {
    console.log(e);
  }
 
  chartHovered(e:any):void {
    console.log(e);
  }

  randomizeType(chartType:string):void {
    if(chartType ==='pie'){
      this.chartType = 'doughnut';
    }else if(chartType ==='doughnut'){
      this.chartType = 'polarArea';
    }else{
      this.chartType = 'pie';
    }
  }

//--------------------------------------------------------------
  // fileURL: SafeResourceUrl;
  // valid:boolean = false;
  // exportBill() {
  //   this.valid = false;
  //   this.reportBillService.getBill(this.consumerNo, this.billMonth, this.language, this.exportType).subscribe(success => {  
  //     var date = new Date(Date.now()).toLocaleDateString();
  //     if(success.status === 200) {
  //       let blob;
  //       if("PDF" === this.exportType) {
  //         blob = new Blob([success.body], {type: 'application/pdf'});//'text/plain'
  //         let url = URL.createObjectURL(blob);
  //         this.fileURL = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  //         this.valid = true;
  //         let  fileName = 'bill_'+date+'.pdf';
  //         // saveAs is a method from third party library file-saver.
  //         // saveAs(blob, fileName);
  //         //-----------------OR------------------
  //         this.downloadFile(blob,fileName);
  //         alert("Bill Exported as PDF");
  //       } else if("HTML" === this.exportType) {
  //         blob = new Blob([success.body]);
  //         var reader = new FileReader();
  //         reader.onload = function() {
  //           var nscWindow = window.open("", "_blank", "");
  //           nscWindow.document.write(reader.result);
  //         }
  //         reader.readAsText(blob);
  // -------------------OR---------------------------
  //        var blob = new Blob([success.body], { type: 'application/html' });
  //        var buffer = new Uint8Array(success.body);
  //        var nscWindow = window.open("", "_blank", "");
  //        nscWindow.document.write(String.fromCharCode.apply(null, buffer));
  //       } else if("EXCEL" === this.exportType) {
  //         let byteArray = this.createByteArrayFromBase64EncryptedBytes(success.body.bytes);
  //         blob = new Blob([byteArray], {type : 'application/vdn.ms-excel'});//'text/plain'
  //         let  fileName = 'bill_'+date+'.xlsx';
  //         // saveAs is a method from third party library file-saver.
  //         // saveAs(blob, fileName);
  //         //-----------------OR------------------
  //         this.downloadFile(blob,fileName);
  //       } else {
  //         alert("Wrong Export Type Selected.");
  //       }
  //     }
  //   }, error => { 
  //     if(error.status === 400 || error.status === 417) {
  //       var errorStr = String.fromCharCode.apply(this, new Uint8Array(error.error));
  //       var errorJson = JSON.parse(errorStr);
  //       alert(errorJson.errorMessage);
  //     } else {
  //       alert("Error inside" + "exportBill()");
  //     }
  //   });
  // }

  // createByteArrayFromBase64EncryptedBytes(encryptedBytes){
  //   let decodedString = atob(encryptedBytes);
  //   let byteNumbers = new Array(decodedString.length);
  //   for (let i = 0; i < decodedString.length; i++) {
  //     byteNumbers[i] = decodedString.charCodeAt(i);
  //   }
  //   let byteArray = new Uint8Array(byteNumbers);
  //   return byteArray;
  // }

  // downloadFile(blob, fileName){
  //   var dlink = document.createElement('a');
  //       dlink.download = fileName;
  //       dlink.href = window.URL.createObjectURL(blob);
  //       document.body.appendChild(dlink);
  //       dlink.click();
  //       dlink.remove();
  //       document.body.removeChild(dlink);
  //       URL.revokeObjectURL(fileURL);
  // }

  // <div *ngIf="valid" id="billView">
  //     <iframe [src]="fileURL" type="application/pdf" width="100%" height="100%">
  //       <object [data]="fileURL" type="application/pdf">
  //         <p>This browser does not support PDFs. Please download the PDF to view it: <a [href]="fileURL">Download PDF</a>.</p>
  //       </object>
  //     </iframe>
  //   </div>

  // #billView{
  //   display: flex;
  //   height: 100vh;
  //   flex-direction: column;
  //   justify-content: space-around;
  // }
//--------------------------------------------------------------

// <table id="tblData">
//     <tr>
//         <th>Name</th>
//         <th>Email</th>
//         <th>Country</th>
//     </tr>
//     <tr>
//         <td>John Doe</td>
//         <td>john@gmail.com</td>
//         <td>USA</td>
//     </tr>
// </table>
// The button triggers exportTableToExcel() function to export HTML table data using JavaScript.

// <button onclick="exportTableToExcel('tblData')">Export Table Data To Excel File</button>
// If you want to export data with the custom file name, pass your desired file name in the exportTableToExcel() function.

// <button onclick="exportTableToExcel('tblData', 'members-data')">Export Table Data To Excel File</button>

exportTableToExcel(tableID, filename = ''){
  var downloadLink;
  var dataType = 'application/vnd.ms-excel';
  var tableSelect = document.getElementById(tableID);
  var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
  
  // Specify file name
  filename = filename?filename+'.xls':'excel_data.xls';
  
  // Create download link element
  downloadLink = document.createElement("a");
  
  document.body.appendChild(downloadLink);
  
  if(window.navigator && window.navigator.msSaveOrOpenBlob){
      var blob = new Blob(['\ufeff', tableHTML], {
          type: dataType
      });
      window.navigator.msSaveOrOpenBlob( blob, filename);
  }else{
      // Create a link to the file
      downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
  
      // Setting the file name
      downloadLink.download = filename;
      
      //triggering the function
      downloadLink.click();

      // var blobURL   = URL.createObjectURL(blob);
  }
}
}
