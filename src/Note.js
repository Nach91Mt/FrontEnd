export const Note = ({ notes }) => notes.map(not =>
   <div key={not.id}><p><li><strong> {not.content} {not.important}</strong></li></p>
      {not.body}</div>
)
