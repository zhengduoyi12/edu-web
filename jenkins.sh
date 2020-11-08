image_name="deploy_web"
container=`docker ps -a | grep ${image_name}-${1} | awk '{print $1}'`
if [ -n "$container" ]
then
   echo -e "删除容器: $container"
   docker kill $container
   docker rm $container
fi
log_dir="/var/log/edu_web"
workspace="/var/lib/jenkins/workspace"
job_name="edu-web"
docker run  --name ${image_name}-${1} -id -v ${workspace}/${job_name}:/workspace/${job_name} -v ${log_dir}:${log_dir}  -p ${1}:3001 ${image_name} sh /workspace/${job_name}/restart.sh ${1}