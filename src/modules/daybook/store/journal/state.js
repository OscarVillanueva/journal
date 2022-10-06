export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sed nihil corrupti cum non quaerat. Adipisci illum, iusto perferendis dicta dolorum rem nulla. Debitis voluptatibus non repellendus voluptatum, magni culpa?",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "2 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sed nihil corrupti cum non quaerat. Adipisci illum, iusto perferendis dicta dolorum rem nulla. Debitis voluptatibus non repellendus voluptatum, magni culpa?",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "3 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sed nihil corrupti cum non quaerat. Adipisci illum, iusto perferendis dicta dolorum rem nulla. Debitis voluptatibus non repellendus voluptatum, magni culpa?",
      picture: null,
    },
  ]
})