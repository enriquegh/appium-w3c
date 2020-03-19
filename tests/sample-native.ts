describe("Native Test", () => {
    it("should get page source", () => {
        browser.getPageSource()
    
    })
    it("should set a JWP implicit timeout", () => {
        browser.setTimeout({ 'implicit': 5000 })
    })

    it("should set a W3C implicit timeout", () => {
        browser.setTimeouts(5000)
    })

    it("should do an /actions command", ()=> {
            
            browser.performActions([{
                "type": "pointer",
                "id": "finger1",
                "parameters": {"pointerType": "touch"},
                "actions": [
                    {"type": "pointerMove", "duration": 0, "x": 100, "y": 100},
                    {"type": "pointerDown", "button": 0},
                    {"type": "pause", "duration": 500},
                    {"type": "pointerMove", "duration": 1000, "origin": "pointer", "x": -50, "y": 0},
                    {"type": "pointerUp", "button": 0}
                ]
            }, {
                "type": "pointer",
                "id": "finger2",
                "parameters": {"pointerType": "touch"},
                "actions": [
                    {"type": "pointerMove", "duration": 0, "x": 100, "y": 100},
                    {"type": "pointerDown", "button": 0},
                    {"type": "pause", "duration": 500},
                    {"type": "pointerMove", "duration": 1000, "origin": "pointer", "x": 50, "y": 0},
                    {"type": "pointerUp", "button": 0}
                ]
            }]);
    })
        
})