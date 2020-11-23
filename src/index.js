let obj = {
  id: 9216,
  children: [
    { id: 123, children: null },
    {
      id: 124,
      children: [
        {
          id: 1241,
          children: [
            { id: "12411", children: null },
            { id: "12412", children: null },
          ],
        },
      ],
    },
  ],
};

console.log(obj?.children[1]?.children[1]?.id ?? 'No children found');
