import React, {useEffect} from "react";
import {createClient} from '@supabase/supabase-js'

const Supabase = ({
                      setTotalStudent,
                      setChartBarVelo,
                      setChartBarTer, setChartBarBus, setChartBarRer, setChartBarScooter, setChartBarMetro
                  }) => {
    const supabaseUrl = process.env["REACT_APP_SUPABASE_URL "]
    const supabaseKey = process.env["REACT_APP_SUPABASE_KEY "]
    const supabase = createClient(supabaseUrl, supabaseKey)

    // récupération du nombre d'élève total
    useEffect(async () => {

        let {data: Student, error} = await supabase
            .from('Student')
            .select('*')

        setTotalStudent(Student.length);
        //console.log(Student.length);

    })

    // recupération du nombre d'élèves par transport
    useEffect(async () => {
        let {data: dataStudent, error} = await supabase
            .from('Transport')
            .select(`
    id,
    Student (
      transport_id
    )
  `)
        setChartBarVelo(dataStudent[0].Student.length);
        setChartBarBus(dataStudent[1].Student.length);
        setChartBarMetro(dataStudent[2].Student.length);
        setChartBarScooter(dataStudent[3].Student.length);
        setChartBarRer(dataStudent[4].Student.length);
        setChartBarTer(dataStudent[5].Student.length);
    }, []);

    return <div></div>
}

export default Supabase;