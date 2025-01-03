import { StyleSheet, View } from 'react-native'
import React from 'react' 
import { ReusableText, ReusableTextInput, HeightSpacer } from '../../components/'; 

const ReusableForm = ({ fields }) => {
    const renderFields = () => {
      return fields.map((field, index) => (
        <View style={styles.container} key={index}>
          <HeightSpacer height={10} /> 
          <ReusableText text={field.label} color="blue" /> 
          <ReusableTextInput 
            width={200} height={50} fontSize={16}
            onChangeText={field.onChange}
            value={field.value}
            placeholder={field.placeholder}
            secureTextEntry={field.secureTextEntry || false}
          />
        </View>
      ));
    };
  
    return (
      <View style={styles.container}>
        {renderFields()}
      </View>
    );
};

export default ReusableForm

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
    }, 
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
}); 