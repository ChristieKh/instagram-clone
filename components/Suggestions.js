import { useEffect, useState } from "react";
import { faker } from '@faker-js/faker';

function Suggestions() {
const [suggestions, setSuggestions] = useState([]);

useEffect(() => {
    const suggestions = [...Array(5)].map(() => ({
            userId: faker.datatype.uuid(),
            userName: faker.internet.userName(),
            company: faker.company.name(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
        }));
        setSuggestions(suggestions);
}, [])

    return(
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-small font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold">See all</button>
            </div>

            {suggestions.map(profile => 
                <div key={profile.userId} className="flex items-center justify-between mt-3">
                    <img className="w-10 h-10 rounded-full border p-[2px]"
                        src={profile.avatar} 
                        alt="" 
                    />

                    <div className="flex-1 ml-4">
                        <h2 className="font-semibold text-sm">{profile.userName}</h2>
                        <h3 className="text-xs text-gray-400">Works at {profile.company}</h3>
                    </div>
                    <button className="text-blue-400 text-xs font-bold">Follow</button>
                </div>
            )}

        </div>
    )
}

export default Suggestions;