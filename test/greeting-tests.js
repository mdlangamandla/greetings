describe("Greetings exercise(The greeting Function)", ()=> {
    
        it("It should greet Melikhaya in Portuguese.", ()=> {
            let amagama= greet()
            amagama.setNames("Melikhaya")
            assert.equal(amagama.bulisa("portuguese", "Melikhaya"), "Olá , Melikhaya");

    });

    it("It should greet Melikhaya in English.",  ()=> {
        let amagama = greet()
        amagama.setNames("Melikhaya")
        assert.equal(amagama.bulisa("english", "Melikhaya"), "Hello, Melikhaya");

    })

    it("It should greet Melikhaya in IsiXhosa.",  ()=> {
        let amagama = greet()
        amagama.setNames("Melikhaya")
        assert.equal(amagama.bulisa("IsiXhosa", "Melikhaya"), "Molo, Melikhaya");

    })
    
    it("It should be able to count each person greeted only once.",  ()=> {
        let amagama = greet();
        amagama.setNames("Melikhaya")
        assert.equal(1, amagama.getGreetCtr());
    })

    it("It should warn the user if string is empty.",()=>{
        let amagama= greet()
        let str="";
        assert.equal(amagama.antiEmpty(str),"Please enter your name!!")
    })

    it("It should return true if digits/numbers exist in a string name.",()=> {
        let amagama= greet();
        let alphaNum = "Molo58"
        assert.equal(!!amagama.antiDigit(alphaNum),true)
    })

    it("It Should return three names object keys which are 'Amanda', 'Sisa', 'Hlumela'.",()=>{
        let amagama= greet();
        amagama.setNames("Amanda");
        amagama.setNames("Sisa");
        amagama.setNames("Hlumela");
     
        assert.deepEqual( amagama.getGreetKeys(),["Amanda","Sisa","Hlumela"])

    })

  
});
