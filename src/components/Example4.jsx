import React, { useState } from 'react'

const Example4 = () => {
    const [isDark, setIsDark] = useState(true)
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                paddingTop: '2em',
                backgroundColor: isDark ? "#000" : '#fff',
                height: '100vh',
                color: isDark ? "#fff" : '#000'
            }}>
            {isDark ? < button
                onClick={() => setIsDark(!isDark)}
                type="button"
                className="btn btn-light mb-5"
            >
                Switch to light mode
            </button>
                : <button
                    onClick={() => setIsDark(!isDark)}
                    type="button"
                    className="btn btn-dark  mb-5"
                > Switch to Dark Mode
                </button >
            }

            <h1 >Theme Switcher</h1>
            <p style={{ padding: '3em' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam veritatis veniam, similique, facere explicabo reiciendis exercitationem maiores omnis ea in commodi eos unde. Repudiandae excepturi itaque ullam explicabo, fugiat tenetur laborum consectetur error iure facere neque laudantium quod exercitationem modi quas? Eos esse repudiandae cupiditate facilis provident nesciunt eveniet dolore, at aliquid? Modi dolorum suscipit, perspiciatis deserunt ea animi fuga, necessitatibus debitis ullam voluptates possimus asperiores. Doloremque fugit eos dolores nam, esse labore temporibus id voluptate. Laborum quibusdam enim nostrum cupiditate consequuntur corporis excepturi numquam! Aspernatur earum reiciendis aut in numquam amet omnis id obcaecati magnam dolores molestias placeat eos enim animi fuga debitis cupiditate, eligendi tempora sunt blanditiis magni perspiciatis. Quas perferendis laudantium quisquam labore explicabo qui laborum pariatur placeat, iure animi officiis numquam iste eum fugit dolores! Quo, culpa inventore. Consequatur minima quasi tempora minus quis sunt delectus quam repellat! Sequi a nulla accusamus illum iusto exercitationem distinctio facilis recusandae dolor corporis totam officiis, cum iure itaque pariatur. Quam, molestiae. Expedita incidunt tempore officiis? Sunt quas dolores reprehenderit molestiae modi sequi laboriosam reiciendis et dolorem? Odit ut corrupti sunt quaerat inventore sed numquam minus eaque nulla, at sapiente nostrum et voluptas reprehenderit? Sapiente, similique eos quidem, ipsa accusamus culpa, in adipisci perferendis molestias nulla hic eum impedit commodi beatae ullam. Omnis quidem culpa, esse voluptatum magni at consequuntur deserunt eaque dignissimos provident necessitatibus voluptates architecto asperiores atque ipsam, quas quam quis, blanditiis eveniet iste quaerat? Ipsum maiores eveniet ducimus quos adipisci, nesciunt repudiandae veritatis accusamus praesentium recusandae ut quia dolor rem placeat ab ad dolorum provident perspiciatis obcaecati. Nam explicabo provident facere tempora distinctio excepturi pariatur labore reprehenderit sapiente blanditiis. Ratione asperiores vitae quia! Ipsa officia sed nihil praesentium, vel cum excepturi exercitationem possimus iste molestias illum consectetur provident! Eos nesciunt ipsa molestias, accusamus nisi inventore laboriosam sapiente.
            </p>
        </div >
    )
}

export default Example4