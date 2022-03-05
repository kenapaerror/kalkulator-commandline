const ps = require("prompt-sync");
const prompt = ps();

class Calculator {
    handleInput(message) {
        const userInput = prompt(message);

        return userInput;
    }

    handleData(message, type, option, text) {
        const len = this.handleInput(message);

        let arr = [];
        for (let i = 1; i <= len; i++) {
            let userInput = this.handleInput(`Masukan data ke-${ i }: `);
            arr.push(parseInt(userInput));
        }
        
        let total = type == 0 ? 0 : arr[0];
        let i = type == 0 ? 0 : 1;
        for (i; i < arr.length; i++) {
            switch (option) {
                case 1:
                    total += arr[i];
                    break;

                case 2:
                    total -= arr[i];
                    break;

                case 3:
                    total /= arr[i];
                    break;

                case 4:
                    total *= arr[i];
                    break;
            
                default:
                    break;
            }
        }

        console.info(`Hasil ${ text } adalah = ${ total }`);
        this.handleExit();
    }

    handleExit() {
        const userInput = this.handleInput("Apakah anda ingin keluar? 1. Tidak, 2. Iya: ");

        switch (parseInt(userInput)) {
            case 1:
                this.display();
                break;

            case 2:
                console.info("Sampai jumpa lagi!");
                break;
        
            default:
                console.info("Pilihan tidak tersedia");
                break;
        }
    }

    handleTambah() {
        this.handleData(
            "Masukan jumlah data: ",
            0,
            1,
            "pertambahan"
        );
    }

    handleKurang() {
        this.handleData(
            "Masukan jumlah data: ",
            1,
            2,
            "pengurangan"
        );
    }

    handleBagi() {
        this.handleData(
            "Masukan jumlah data: ",
            1,
            3,
            "pembagian"
        );
    }

    handleKali() {
        this.handleData(
            "Masukan jumlah data: ",
            1,
            4,
            "perkalian"
        );
    }

    display() {
        console.info("\nSilahkan pilih: ");
        console.info("1. Pertambahan");
        console.info("2. Pengurangan");
        console.info("3. Pembagian");
        console.info("4. Perkalian");
        console.info("5. Exit");

        const userInput = this.handleInput("Masukan pilihan anda: ");

        switch (parseInt(userInput)) {
            case 1:
                console.info("\nPertambahan");
                this.handleTambah();
                break;

            case 2:
                console.info("\nPengurangan");
                this.handleKurang();
                break;

            case 3:
                console.info("\nPembagian");
                this.handleBagi();
                break;

            case 4:
                console.info("\nPerkalian");
                this.handleKali();
                break;

            case 5:
                this.handleExit();
                break;
        
            default:
                console.info("\nPilihan tidak tersedia");
                break;
        }
    }
}

const data = new Calculator;
data.display();