export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    <p className="Person__age">
      {person.age ? <p>I am ${person.age}</p> : null}
    </p>
    {person.isMarried === true ? (
      <p className="Person__partner">
        {person.sex === 'm' ? (
          <p>${person.partnerName} is my wife</p>
        ) : (
          <p>${person.partnerName} is my husband</p>
        )}
      </p>
    ) : (
      <p>I am not married</p>
    )}
  </section>
);
