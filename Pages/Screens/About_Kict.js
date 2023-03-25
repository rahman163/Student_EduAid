import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About_Kict = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>The Kulliyyah of Information and Communication Technology (KICT) was established in November 2001. From that moment, KICT has made necessary moves to realize its vision, which is to produce knowledge workers equipped with ICT skills and knowledge ('Ilm) and the Consciousness of God (Taqwa).</Text>
      <br />
      <Text style={styles.Text}>This Kulliyyah is the combination of the Department of Information Systems (DIS), Department of Computer Sciences (DCS), and Department of Library and Information Science (DLIS). All programmes in the Kulliyyah are designed for integration of Islamic knowledge and ICT.</Text>
      <br />
      <Text style={styles.Text}>The Kulliyyah has the mission to promote collaboration with other universities and industries, both nationally and internationally, in teaching, learning, research, and consultancy, to establish a center of excellence for each department in KICT, and to advance research and development in creating a value-based information system.</Text>
      <br />
      <Text style={styles.Text}>KICT also aspires to initiate and develop more rigorous programmes in the area of information and communication technology. It places a great emphasis on providing excellent programmes and teaching resources in order to enhance the quality of learning and research. It is expected that students will find a unique set of opportunities available to study for both undergraduate and postgraduate programmes.</Text>
    </View>
  )
}

export default About_Kict

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##8aedf9',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  
  Text: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    fontWeight: "bold"
    
  }
})