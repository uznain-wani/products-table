function createData(id, brand, icon, description, members, categories, tags, nextmeeting) {
  return {
    id,
    brand,
    icon,
    description,
    members: members || [],
    categories: categories || [], 
    tags: tags || [],
    nextmeeting
  };
}
export const rows = [
    createData(1, 'Google', '/images/social/google.png', 'Develop a personalized fitness app',
     [{ id: 'm1', avatarUrl: '/images/pic1.png' },{ id: 'm3', avatarUrl: '/images/pic6.png' },{ id: 'm3', avatarUrl: '/images/pic5.png' },
     { id: 'm1', avatarUrl: '/images/pic7.png' },{ id: 'm1', avatarUrl: '/images/pic1.png' }], ['Automation'], 
     ['DigitalTransformation','iiiiiii'], 'in 30 minutes'),

    createData(2, 'Dribble', '/images/social/dribbble.png', 'Introduce a cloud-based platform', 
    [{ id: 'm2', avatarUrl: '/images/pic2.png' }, { id: 'm3', avatarUrl: '/images/pic5.png' },{ id: 'm1', avatarUrl: '/images/pic7.png' },
    { id: 'm1', avatarUrl: '/images/pic1.png' },,{ id: 'm1', avatarUrl: '/images/pic1.png' },{ id: 'm1', avatarUrl: '/images/pic1.png' },
    { id: 'm1', avatarUrl: '/images/pic1.png' }], ['E-commerce'], ['OnlineShopping'], 'Tomorrow'),

    createData(3, 'Instagram', '/images/social/instagram.png', 'Develop a mobile app aimed at marketers',
     [{ id: 'm4', avatarUrl: '/images/pic3.png' },{ id: 'm3', avatarUrl: '/images/pic4.png' },{ id: 'm3', avatarUrl: '/images/pic1.png' },
     { id: 'm1', avatarUrl: '/images/pic1.png' },{ id: 'm1', avatarUrl: '/images/pic7.png' }], ['Marketing'], ['EmailAutomation'], 'in 6 hours'),
 

     createData(4, 'LinkedIn', '/images/social/linkedin.png', 'Develop a personalized fitness app',
     [{ id: 'm1', avatarUrl: '/images/pic1.png' },{ id: 'm3', avatarUrl: '/images/pic6.png' },{ id: 'm3', avatarUrl: '/images/pic5.png' },
     { id: 'm1', avatarUrl: '/images/pic7.png' },{ id: 'm1', avatarUrl: '/images/pic1.png' }], ['Automation'], 
     ['DigitalTransformation','iiiiiii'], 'in 30 minutes'),
     createData(5, 'MailChimp', '/images/social/mailchimp.png', 'Develop a personalized fitness app',
     [{ id: 'm1', avatarUrl: '/images/pic1.png' },{ id: 'm3', avatarUrl: '/images/pic6.png' },{ id: 'm3', avatarUrl: '/images/pic5.png' },
     { id: 'm1', avatarUrl: '/images/pic7.png' },{ id: 'm1', avatarUrl: '/images/pic1.png' }], ['Automation'], 
     ['DigitalTransformation','iiiiiii'], 'in 30 minutes'),

     createData(6, 'Facebook', '/images/social/facebook.png', 'Develop a personalized fitness app',
     [{ id: 'm1', avatarUrl: '/images/pic1.png' },{ id: 'm3', avatarUrl: '/images/pic6.png' },{ id: 'm3', avatarUrl: '/images/pic5.png' },
     { id: 'm1', avatarUrl: '/images/pic7.png' },{ id: 'm1', avatarUrl: '/images/pic1.png' }], ['Automation'], 
     ['DigitalTransformation','iiiiiii'], 'in 30 minutes'),

     createData(7, 'Slack', '/images/social/slack.png', 'Develop a personalized fitness app',
     [{ id: 'm1', avatarUrl: '/images/pic1.png' },{ id: 'm3', avatarUrl: '/images/pic6.png' },{ id: 'm3', avatarUrl: '/images/pic5.png' },
     { id: 'm1', avatarUrl: '/images/pic7.png' },{ id: 'm1', avatarUrl: '/images/pic1.png' }], ['Automation'], 
     ['DigitalTransformation','iiiiiii'], 'in 30 minutes'),

     createData(8, 'Twitter', '/images/social/twitter.png', 'Develop a personalized fitness app',
     [{ id: 'm1', avatarUrl: '/images/pic1.png' },{ id: 'm3', avatarUrl: '/images/pic6.png' },{ id: 'm3', avatarUrl: '/images/pic5.png' },
     { id: 'm1', avatarUrl: '/images/pic7.png' },{ id: 'm1', avatarUrl: '/images/pic1.png' }], ['Automation'], 
     ['DigitalTransformation','iiiiiii'], 'in 30 minutes'),

  ];