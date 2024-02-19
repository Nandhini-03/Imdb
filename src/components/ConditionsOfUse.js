import React from 'react';

function ConditionsOfUse() {
  try {
    return <div>Conditions of Use</div>;
  } catch (error) {
    console.error('Error rendering ConditionsOfUse:', error);
    return <div>Error rendering Conditions of Use</div>;
  }
}

export default ConditionsOfUse;
