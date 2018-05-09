const anagram=require('./anagram.js')


describe("anagram",()=>{
    it("should[]",()=>{
        expect(anagram()).toEqual([])
    })
    it("should[a]",()=>{
        expect(anagram("a")).toEqual(["a"])
    })
})