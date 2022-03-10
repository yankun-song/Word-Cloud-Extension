let toDo = `6 min read
Cops Framing Suspects: My Take on Why Every Traffic Stop Is Terrifying
A Florida officer getting 12 years in prison for planting drugs on suspects triggered me and probably you too.
A police officer makes a traffic stop. Photo: Getty Images

B
eing pulled over by the police scares me to death. Long before Philando Castille, Sandra Bland, and Walter Scott — all Black people who wound up dying after a traffic stop-— became national news, a cop switching lanes to drive behind me used to make my heart skip a beat. But being stopped is just the tip of the iceberg. Black folks often get framed during these stops. And as I was reading the recent story of a cop that, this past July, was sentenced to 12 years in prison for planting drugs on motorists, I was triggered. The story of this former officer made me remember a traffic stop in Virginia where I thought I too might be framed for a crime I didn’t commit.

In 2012, I was fresh out of law school and living with my cousin in Fredericksburg, Virginia. The city is about 50 miles south of northern Virginia, the “V” part of the DMV, and it’s also north of Richmond, a much more populated area. Fredericksburg is the kind of place a Black person drives through, not stops in.
`;

function contentToArr(content) {

  const arr = [];
  paragraphs = content.split("\n").filter((el) => el.length > 15);
  for (let para of paragraphs) {
    para = para.replace(/[^\w\s]|_/g, "");
    arr.push(...para.split(" ").filter((el) => el.length > 4));
  }
  return arr;
}

const words = contentToArr(toDo);


function sortArrayByFreq(words) {
  const counter = Object.create(null);
  words.forEach(function (word) {
    counter[word] = (counter[word] || 0) + 1;
  });
  let entries = Object.entries(counter);
  let sorted = entries.sort((a, b) => -a[1] +b[1]);
  return sorted.slice(0,5);
}

console.log(sortArrayByFreq(words));