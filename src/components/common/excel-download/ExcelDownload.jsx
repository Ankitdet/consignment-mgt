import React from 'react';
import excelIcon from '../../../assets/icons/excel-icon.svg';

export default function ExcelDownload({ columnHeaders, data }) {
  const excelDownload = () => {
    let table = `
        <html xmlns:x="urn:schemas-microsoft-com:office:excel">
        <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
        <xml>
        <x:ExcelWorkbook>
        <x:ExcelWorksheets>
        <x:ExcelWorksheet>
        <x:Name>OrderList</x:Name>
        <x:WorksheetOptions>
        <x:Panes>
        </x:Panes>
        </x:WorksheetOptions>
        </x:ExcelWorksheet>
        </x:ExcelWorksheets>
        </x:ExcelWorkbook>
        </xml>
        </head>
        <body>
        <table>
        <tr>`;
    for (let prop in columnHeaders) {
      table =
        table +
        `<th style="text-align:${columnHeaders[prop].align || 'left'};">` +
        (columnHeaders[prop].title || '') +
        '</th>';
    }
    table = table + '</tr>';
    for (let i = 0; i < data.length; i++) {
      table = table + '<tr>';
      for (let prop in columnHeaders) {
        table =
          table +
          `<td style="text-align:${columnHeaders[prop].align || 'left'};">` +
          (data[i][columnHeaders[prop].dataIndex] || '') +
          '</td>';
      }
      table = table + '</tr>';
    }
    table = table + '<tr></tr>';

    table = table + `</table></body></html>`;
    let myBlob = new Blob([table], {
      type: 'application/ms-excel',
    });
    return window.URL.createObjectURL(myBlob);
  };
  return (
    <div className="consignment-download-excel-main">
      <a
        href={excelDownload()}
        download="ProductDetails.xls"
        aria-label="download excel"
        className="consignment-download-excel"
      >
        <img src={excelIcon} alt="download-icon" className="consignment-download-icon" />
        <div className="consignment-download-text">Download</div>
      </a>
    </div>
  );
}
