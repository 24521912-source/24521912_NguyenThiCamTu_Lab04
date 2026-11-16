
export interface Person {
  id: number
  name: string
  role: string
  email: string
  department: string
  description: string
}

interface PersonDetailProps {
  person: Person
}

export default function PersonDetail({ person }: PersonDetailProps) {
  return (
    <article className="person-detail" aria-labelledby="person-name">
      <div className="person-avatar" aria-hidden="true">
        {person.name
          .split(' ')
          .map((part) => part[0])
          .slice(0, 2)
          .join('')}
      </div>

      <div className="person-information">
        <p className="eyebrow">Person profile</p>
        <h2 id="person-name">{person.name}</h2>
        <p className="person-role">{person.role}</p>

        <dl className="person-fields">
          <div>
            <dt>Person ID</dt>
            <dd>{person.id}</dd>
          </div>

          <div>
            <dt>Email</dt>
            <dd>{person.email}</dd>
          </div>

          <div>
            <dt>Department</dt>
            <dd>{person.department}</dd>
          </div>
        </dl>

        <h3>About</h3>
        <p className="person-description">
          {person.description}
        </p>
      </div>
    </article>
  )
}
