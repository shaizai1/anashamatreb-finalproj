import React from 'react';

const [, drag] = useDrag(...args)
const [, drop] = useDrop(...args)

return <div ref={(node) => drag(drop(node))}></div>

