import { PDFDocument } from './PDFDocument';

export class PDFViewer {

    constructor(private pdfdoc: PDFDocument) {
        
        this.inputPDFNumPage.onchange = async (ev) => {
            const i = this.numPage;
            const canvas = await pdfdoc.getCanvasPage(i);
            canvas.style.height = "200px";
            document.getElementById("pdfSnapshot").innerHTML = "";
            document.getElementById("pdfSnapshot").appendChild(canvas);
        }

        this.inputPDFNumPage.value = "1";
    }

    get numPage(): number {
        return parseInt(this.inputPDFNumPage.value);
    }


    get inputPDFNumPage(): HTMLInputElement {
        return <HTMLInputElement>document.getElementById("pdfNumPage");
    }
}