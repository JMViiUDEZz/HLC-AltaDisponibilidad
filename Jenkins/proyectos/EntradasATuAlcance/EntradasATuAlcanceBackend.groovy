// import jenkins-auto-approve-script.groovy

job('Job-EntradasATuAlcance-Backend') {
    description('Job Padre para crear la Tarea Hija que despliegue el Proyecto EntradasATuAlcance Backend')
    scm {
        git('https://github.com/JMViiUDEZz/EntradasATuAlcance-Backend.git', 'master') {
            node ->
                node / gitConfigName('JMViiUDEZz')
                node / gitConfigEmail('jmviudezp2003@gmail.com')
        }
    }
    triggers {
        //   scm('H/5 * * * *')
        githubPush()
    }
    steps {
        shell('bash docker-node.sh &&  docker-nginx.sh')
    }
}
