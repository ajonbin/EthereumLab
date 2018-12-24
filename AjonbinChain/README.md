# A Private Chain - AjonbinChain #

## Genesis Configuration ##

~~~shell
$cat genesis.json
~~~

~~~json
{
    "config":{
        "chainId": 1979,
        "homesteadBlock":0,
        "eip155Block":0,
        "eip158Block":0
    },
    "difficulty":"0x40",
    "gasLimit":"2100000",
    "alloc":{}
}
~~~

## Create a Chain ##

~~~shell
$ ls
README.md	genesis.json

$ geth init genesis.json --datadir data
INFO [12-11|12:56:54.928] Maximum peer count                       ETH=25 LES=0 total=25
INFO [12-11|12:56:54.937] Allocated cache and file handles         database=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data/geth/chaindata cache=16 handles=16
INFO [12-11|12:56:54.945] Writing custom genesis block 
INFO [12-11|12:56:54.946] Persisted trie from memory database      nodes=0 size=0.00B time=64.794µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [12-11|12:56:54.946] Successfully wrote genesis state         database=chaindata                                                              hash=7c037e…178913
INFO [12-11|12:56:54.946] Allocated cache and file handles         database=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data/geth/lightchaindata cache=16 handles=16
INFO [12-11|12:56:54.951] Writing custom genesis block 
INFO [12-11|12:56:54.951] Persisted trie from memory database      nodes=0 size=0.00B time=2.861µs  gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [12-11|12:56:54.952] Successfully wrote genesis state         database=lightchaindata                                                              hash=7c037e…178913
$ ls
README.md	data		genesis.json

HAIMHUAN-M-40YV:AjonbinChain haimhuan$ tree data/
data/
├── geth
│   ├── chaindata
│   │   ├── 000001.log
│   │   ├── CURRENT
│   │   ├── LOCK
│   │   ├── LOG
│   │   └── MANIFEST-000000
│   └── lightchaindata
│       ├── 000001.log
│       ├── CURRENT
│       ├── LOCK
│       ├── LOG
│       └── MANIFEST-000000
└── keystore

4 directories, 10 files
~~~

## Create New Account ##

~~~shell
$ geth --datadir ./data account new
INFO [12-11|13:34:39.654] Maximum peer count                       ETH=25 LES=0 total=25
Your new account is locked with a password. Please give a password. Do not forget this password.
Passphrase: 123456
Repeat passphrase: 123456
Address: {5bf9178861a5fecd9f7af0a1145e7c893402ca10}

$ geth --datadir ./data account new
INFO [12-11|13:35:26.419] Maximum peer count                       ETH=25 LES=0 total=25
Your new account is locked with a password. Please give a password. Do not forget this password.
Passphrase: 123456
Repeat passphrase: 123456
Address: {2c78ad8dc25aa31beb9adf696b4a0c9544f865cd}
HAIMHUAN-M-40YV:AjonbinChain haimhuan$ tree ./
./
├── README.md
├── data
│   ├── geth
|   |...
│   └── keystore
│       ├── UTC--2018-12-11T05-35-04.520519000Z--5bf9178861a5fecd9f7af0a1145e7c893402ca10
│       └── UTC--2018-12-11T05-35-31.743691000Z--2c78ad8dc25aa31beb9adf696b4a0c9544f865cd
└── genesis.json

5 directories, 14 files
~~~

* Two account was create in data/keystore

## Operation in Console ##

~~~shell
$ geth --datadir ./data console
~~~

~~~shell
INFO [12-11|13:38:50.892] Maximum peer count                       ETH=25 LES=0 total=25
INFO [12-11|13:38:50.906] Starting peer-to-peer node               instance=Geth/v1.8.18-stable/darwin-amd64/go1.11.2
INFO [12-11|13:38:50.906] Allocated cache and file handles         database=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data/geth/chaindata cache=768 handles=128
INFO [12-11|13:38:50.929] Initialised chain configuration          config="{ChainID: 1979 Homestead: 0 DAO: <nil> DAOSupport: false EIP150: <nil> EIP155: 0 EIP158: 0 Byzantium: <nil> Constantinople: <nil> Engine: unknown}"
INFO [12-11|13:38:50.929] Disk storage enabled for ethash caches   dir=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data/geth/ethash count=3
INFO [12-11|13:38:50.929] Disk storage enabled for ethash DAGs     dir=/Users/haimhuan/.ethash                                             count=2
INFO [12-11|13:38:50.930] Initialising Ethereum protocol           versions="[63 62]" network=1
INFO [12-11|13:38:50.931] Loaded most recent local header          number=0 hash=7c037e…178913 td=64 age=49y7mo3w
INFO [12-11|13:38:50.931] Loaded most recent local full block      number=0 hash=7c037e…178913 td=64 age=49y7mo3w
INFO [12-11|13:38:50.931] Loaded most recent local fast block      number=0 hash=7c037e…178913 td=64 age=49y7mo3w
INFO [12-11|13:38:50.934] Regenerated local transaction journal    transactions=0 accounts=0
INFO [12-11|13:38:50.949] New local node record                    seq=1 id=a43b2462bbfaa4e8 ip=127.0.0.1 udp=30303 tcp=30303
INFO [12-11|13:38:50.950] Started P2P networking                   self=enode://30ed193e7bf6327ef3f2b060875c08d6e88d8e5a3bf4c82abc6ed568d080dbe9eff4b7c55ff1ab88b70e09cfff56a414bcf1138129b86ab22b01a857841f300e@127.0.0.1:30303
INFO [12-11|13:38:50.955] IPC endpoint opened                      url=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data/geth.ipc
Welcome to the Geth JavaScript console!

instance: Geth/v1.8.18-stable/darwin-amd64/go1.11.2
INFO [12-11|13:38:51.081] Etherbase automatically configured       address=0x5bF9178861A5Fecd9F7AF0a1145e7C893402ca10
coinbase: 0x5bf9178861a5fecd9f7af0a1145e7c893402ca10
at block: 0 (Thu, 01 Jan 1970 08:00:00 CST)
 datadir: /Users/haimhuan/workspace/EthereumLab/AjonbinChain/data
 modules: admin:1.0 debug:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0
>
~~~

### Check Accounts ###

~~~shell
> eth.accounts
["0x5bf9178861a5fecd9f7af0a1145e7c893402ca10", "0x2c78ad8dc25aa31beb9adf696b4a0c9544f865cd"]
> eth.getBalance("0x5bf9178861a5fecd9f7af0a1145e7c893402ca10")
0
> eth.getBalance(eth.accounts[1])
0
> eth.blockNumber
0
~~~

### Mining ###

#### Start Mining ####

* start(1) means only start one thread for mining
* By default, use the first account. Can call miner.setEtherbase(address) to change coibase account.

~~~shell
> miner.start(1)
INFO [12-11|13:44:18.175] Updated mining threads                   threads=1
INFO [12-11|13:44:18.175] Transaction pool price threshold updated price=1000000000
null
> INFO [12-11|13:44:18.176] Commit new mining work                   number=1 sealhash=c2f120…234402 uncles=0 txs=0 gas=0 fees=0 elapsed=311.869µs
INFO [12-11|13:44:19.493] Generating DAG in progress               epoch=0 percentage=0 elapsed=531.568ms
INFO [12-11|13:44:20.005] Generating DAG in progress               epoch=0 percentage=1 elapsed=1.044s
INFO [12-11|13:44:20.499] Generating DAG in progress               epoch=0 percentage=2 elapsed=1.537s
INFO [12-11|13:44:21.005] Generating DAG in progress               epoch=0 percentage=3 elapsed=2.043s
INFO [12-11|13:44:21.522] Generating DAG in progress               epoch=0 percentage=4 elapsed=2.561s
INFO [12-11|13:44:22.012] Generating DAG in progress               epoch=0 percentage=5 elapsed=3.051s
INFO [12-11|13:44:22.501] Generating DAG in progress               epoch=0 percentage=6 elapsed=3.540s
INFO [12-11|13:44:23.076] Generating DAG in progress               epoch=0 percentage=7 elapsed=4.115s
INFO [12-11|13:44:23.567] Generating DAG in progress               epoch=0 percentage=8 elapsed=4.605s
INFO [12-11|13:44:24.079] Generating DAG in progress               epoch=0 percentage=9 elapsed=5.118s
INFO [12-11|13:44:24.571] Generating DAG in progress               epoch=0 percentage=10 elapsed=5.610s
INFO [12-11|13:44:25.060] Generating DAG in progress               epoch=0 percentage=11 elapsed=6.099s
INFO [12-11|13:44:25.663] Generating DAG in progress               epoch=0 percentage=12 elapsed=6.702s
INFO [12-11|13:44:26.281] Generating DAG in progress               epoch=0 percentage=13 elapsed=7.320s
INFO [12-11|13:44:26.764] Generating DAG in progress               epoch=0 percentage=14 elapsed=7.803s
INFO [12-11|13:44:27.252] Generating DAG in progress               epoch=0 percentage=15 elapsed=8.291s
INFO [12-11|13:44:27.741] Generating DAG in progress               epoch=0 percentage=16 elapsed=8.780s
INFO [12-11|13:44:28.277] Generating DAG in progress               epoch=0 percentage=17 elapsed=9.316s
INFO [12-11|13:44:28.839] Generating DAG in progress               epoch=0 percentage=18 elapsed=9.877s
INFO [12-11|13:44:29.330] Generating DAG in progress               epoch=0 percentage=19 elapsed=10.369s
INFO [12-11|13:44:29.820] Generating DAG in progress               epoch=0 percentage=20 elapsed=10.859s
INFO [12-11|13:44:30.324] Generating DAG in progress               epoch=0 percentage=21 elapsed=11.363s
INFO [12-11|13:44:30.826] Generating DAG in progress               epoch=0 percentage=22 elapsed=11.864s
INFO [12-11|13:44:31.318] Generating DAG in progress               epoch=0 percentage=23 elapsed=12.357s
INFO [12-11|13:44:31.813] Generating DAG in progress               epoch=0 percentage=24 elapsed=12.852s
INFO [12-11|13:44:32.336] Generating DAG in progress               epoch=0 percentage=25 elapsed=13.375s
INFO [12-11|13:44:32.827] Generating DAG in progress               epoch=0 percentage=26 elapsed=13.866s
INFO [12-11|13:44:33.381] Generating DAG in progress               epoch=0 percentage=27 elapsed=14.419s
INFO [12-11|13:44:34.061] Generating DAG in progress               epoch=0 percentage=28 elapsed=15.100s
INFO [12-11|13:44:34.613] Generating DAG in progress               epoch=0 percentage=29 elapsed=15.652s
INFO [12-11|13:44:35.110] Generating DAG in progress               epoch=0 percentage=30 elapsed=16.149s
INFO [12-11|13:44:35.592] Generating DAG in progress               epoch=0 percentage=31 elapsed=16.631s
INFO [12-11|13:44:36.108] Generating DAG in progress               epoch=0 percentage=32 elapsed=17.146s
INFO [12-11|13:44:36.714] Generating DAG in progress               epoch=0 percentage=33 elapsed=17.753s
INFO [12-11|13:44:37.343] Generating DAG in progress               epoch=0 percentage=34 elapsed=18.382s
INFO [12-11|13:44:37.856] Generating DAG in progress               epoch=0 percentage=35 elapsed=18.895s
INFO [12-11|13:44:38.346] Generating DAG in progress               epoch=0 percentage=36 elapsed=19.385s
INFO [12-11|13:44:38.860] Generating DAG in progress               epoch=0 percentage=37 elapsed=19.899s
INFO [12-11|13:44:39.432] Generating DAG in progress               epoch=0 percentage=38 elapsed=20.471s
INFO [12-11|13:44:39.938] Generating DAG in progress               epoch=0 percentage=39 elapsed=20.977s
INFO [12-11|13:44:40.427] Generating DAG in progress               epoch=0 percentage=40 elapsed=21.466s
INFO [12-11|13:44:40.939] Generating DAG in progress               epoch=0 percentage=41 elapsed=21.978s
INFO [12-11|13:44:41.445] Generating DAG in progress               epoch=0 percentage=42 elapsed=22.484s
INFO [12-11|13:44:41.930] Generating DAG in progress               epoch=0 percentage=43 elapsed=22.969s
INFO [12-11|13:44:42.416] Generating DAG in progress               epoch=0 percentage=44 elapsed=23.455s
INFO [12-11|13:44:42.918] Generating DAG in progress               epoch=0 percentage=45 elapsed=23.957s
INFO [12-11|13:44:43.413] Generating DAG in progress               epoch=0 percentage=46 elapsed=24.452s
INFO [12-11|13:44:43.904] Generating DAG in progress               epoch=0 percentage=47 elapsed=24.943s
INFO [12-11|13:44:44.394] Generating DAG in progress               epoch=0 percentage=48 elapsed=25.434s
INFO [12-11|13:44:44.994] Generating DAG in progress               epoch=0 percentage=49 elapsed=26.033s
INFO [12-11|13:44:45.492] Generating DAG in progress               epoch=0 percentage=50 elapsed=26.531s
INFO [12-11|13:44:45.979] Generating DAG in progress               epoch=0 percentage=51 elapsed=27.019s
INFO [12-11|13:44:46.520] Generating DAG in progress               epoch=0 percentage=52 elapsed=27.560s
INFO [12-11|13:44:47.116] Generating DAG in progress               epoch=0 percentage=53 elapsed=28.155s
INFO [12-11|13:44:47.745] Generating DAG in progress               epoch=0 percentage=54 elapsed=28.784s
INFO [12-11|13:44:48.231] Generating DAG in progress               epoch=0 percentage=55 elapsed=29.271s
INFO [12-11|13:44:48.724] Generating DAG in progress               epoch=0 percentage=56 elapsed=29.763s
INFO [12-11|13:44:49.216] Generating DAG in progress               epoch=0 percentage=57 elapsed=30.256s
INFO [12-11|13:44:49.728] Generating DAG in progress               epoch=0 percentage=58 elapsed=30.767s
INFO [12-11|13:44:50.298] Generating DAG in progress               epoch=0 percentage=59 elapsed=31.338s
INFO [12-11|13:44:50.823] Generating DAG in progress               epoch=0 percentage=60 elapsed=31.863s
INFO [12-11|13:44:51.340] Generating DAG in progress               epoch=0 percentage=61 elapsed=32.380s
INFO [12-11|13:44:51.868] Generating DAG in progress               epoch=0 percentage=62 elapsed=32.907s
INFO [12-11|13:44:52.375] Generating DAG in progress               epoch=0 percentage=63 elapsed=33.415s
INFO [12-11|13:44:52.979] Generating DAG in progress               epoch=0 percentage=64 elapsed=34.019s
INFO [12-11|13:44:53.506] Generating DAG in progress               epoch=0 percentage=65 elapsed=34.545s
INFO [12-11|13:44:54.020] Generating DAG in progress               epoch=0 percentage=66 elapsed=35.059s
INFO [12-11|13:44:54.521] Generating DAG in progress               epoch=0 percentage=67 elapsed=35.560s
INFO [12-11|13:44:55.030] Generating DAG in progress               epoch=0 percentage=68 elapsed=36.070s
INFO [12-11|13:44:55.516] Generating DAG in progress               epoch=0 percentage=69 elapsed=36.556s
INFO [12-11|13:44:56.134] Generating DAG in progress               epoch=0 percentage=70 elapsed=37.174s
INFO [12-11|13:44:56.633] Generating DAG in progress               epoch=0 percentage=71 elapsed=37.673s
INFO [12-11|13:44:57.230] Generating DAG in progress               epoch=0 percentage=72 elapsed=38.269s
INFO [12-11|13:44:57.829] Generating DAG in progress               epoch=0 percentage=73 elapsed=38.869s
INFO [12-11|13:44:58.358] Generating DAG in progress               epoch=0 percentage=74 elapsed=39.397s
INFO [12-11|13:44:58.847] Generating DAG in progress               epoch=0 percentage=75 elapsed=39.887s
INFO [12-11|13:44:59.342] Generating DAG in progress               epoch=0 percentage=76 elapsed=40.382s
INFO [12-11|13:44:59.929] Generating DAG in progress               epoch=0 percentage=77 elapsed=40.968s
INFO [12-11|13:45:00.523] Generating DAG in progress               epoch=0 percentage=78 elapsed=41.563s
INFO [12-11|13:45:01.023] Generating DAG in progress               epoch=0 percentage=79 elapsed=42.063s
INFO [12-11|13:45:01.611] Generating DAG in progress               epoch=0 percentage=80 elapsed=42.651s
INFO [12-11|13:45:02.119] Generating DAG in progress               epoch=0 percentage=81 elapsed=43.159s
INFO [12-11|13:45:02.626] Generating DAG in progress               epoch=0 percentage=82 elapsed=43.665s
INFO [12-11|13:45:03.109] Generating DAG in progress               epoch=0 percentage=83 elapsed=44.149s
INFO [12-11|13:45:03.597] Generating DAG in progress               epoch=0 percentage=84 elapsed=44.637s
INFO [12-11|13:45:04.086] Generating DAG in progress               epoch=0 percentage=85 elapsed=45.126s
INFO [12-11|13:45:04.598] Generating DAG in progress               epoch=0 percentage=86 elapsed=45.638s
INFO [12-11|13:45:05.083] Generating DAG in progress               epoch=0 percentage=87 elapsed=46.123s
INFO [12-11|13:45:05.562] Generating DAG in progress               epoch=0 percentage=88 elapsed=46.602s
INFO [12-11|13:45:06.049] Generating DAG in progress               epoch=0 percentage=89 elapsed=47.089s
INFO [12-11|13:45:06.578] Generating DAG in progress               epoch=0 percentage=90 elapsed=47.618s
INFO [12-11|13:45:07.221] Generating DAG in progress               epoch=0 percentage=91 elapsed=48.261s
INFO [12-11|13:45:07.776] Generating DAG in progress               epoch=0 percentage=92 elapsed=48.816s
INFO [12-11|13:45:08.399] Generating DAG in progress               epoch=0 percentage=93 elapsed=49.439s
INFO [12-11|13:45:08.908] Generating DAG in progress               epoch=0 percentage=94 elapsed=49.948s
INFO [12-11|13:45:09.400] Generating DAG in progress               epoch=0 percentage=95 elapsed=50.440s
INFO [12-11|13:45:09.883] Generating DAG in progress               epoch=0 percentage=96 elapsed=50.923s
INFO [12-11|13:45:10.393] Generating DAG in progress               epoch=0 percentage=97 elapsed=51.433s
INFO [12-11|13:45:10.896] Generating DAG in progress               epoch=0 percentage=98 elapsed=51.936s
INFO [12-11|13:45:11.701] Generating DAG in progress               epoch=0 percentage=99 elapsed=52.741s
INFO [12-11|13:45:11.704] Generated ethash verification cache      epoch=0 elapsed=52.744s
INFO [12-11|13:45:13.971] Generating DAG in progress               epoch=1 percentage=0  elapsed=515.433ms
INFO [12-11|13:45:14.497] Generating DAG in progress               epoch=1 percentage=1  elapsed=1.040s
INFO [12-11|13:45:15.026] Generating DAG in progress               epoch=1 percentage=2  elapsed=1.570s
INFO [12-11|13:45:15.580] Generating DAG in progress               epoch=1 percentage=3  elapsed=2.124s
INFO [12-11|13:45:16.110] Generating DAG in progress               epoch=1 percentage=4  elapsed=2.654s
INFO [12-11|13:45:16.648] Generating DAG in progress               epoch=1 percentage=5  elapsed=3.192s
INFO [12-11|13:45:17.200] Generating DAG in progress               epoch=1 percentage=6  elapsed=3.744s
INFO [12-11|13:45:17.959] Generating DAG in progress               epoch=1 percentage=7  elapsed=4.503s
INFO [12-11|13:45:18.511] Generating DAG in progress               epoch=1 percentage=8  elapsed=5.055s
INFO [12-11|13:45:19.040] Generating DAG in progress               epoch=1 percentage=9  elapsed=5.584s
INFO [12-11|13:45:19.595] Generating DAG in progress               epoch=1 percentage=10 elapsed=6.139s
INFO [12-11|13:45:20.127] Generating DAG in progress               epoch=1 percentage=11 elapsed=6.671s
INFO [12-11|13:45:20.655] Generating DAG in progress               epoch=1 percentage=12 elapsed=7.199s
INFO [12-11|13:45:21.199] Generating DAG in progress               epoch=1 percentage=13 elapsed=7.743s
INFO [12-11|13:45:21.756] Generating DAG in progress               epoch=1 percentage=14 elapsed=8.300s
INFO [12-11|13:45:22.318] Generating DAG in progress               epoch=1 percentage=15 elapsed=8.863s
INFO [12-11|13:45:22.884] Generating DAG in progress               epoch=1 percentage=16 elapsed=9.428s
INFO [12-11|13:45:23.542] Generating DAG in progress               epoch=1 percentage=17 elapsed=10.086s
INFO [12-11|13:45:24.116] Generating DAG in progress               epoch=1 percentage=18 elapsed=10.660s
INFO [12-11|13:45:24.689] Generating DAG in progress               epoch=1 percentage=19 elapsed=11.233s
INFO [12-11|13:45:25.247] Generating DAG in progress               epoch=1 percentage=20 elapsed=11.791s
INFO [12-11|13:45:25.856] Generating DAG in progress               epoch=1 percentage=21 elapsed=12.400s
INFO [12-11|13:45:26.504] Generating DAG in progress               epoch=1 percentage=22 elapsed=13.048s
INFO [12-11|13:45:27.126] Generating DAG in progress               epoch=1 percentage=23 elapsed=13.670s
INFO [12-11|13:45:27.793] Generating DAG in progress               epoch=1 percentage=24 elapsed=14.337s
INFO [12-11|13:45:28.721] Generating DAG in progress               epoch=1 percentage=25 elapsed=15.265s
INFO [12-11|13:45:29.652] Generating DAG in progress               epoch=1 percentage=26 elapsed=16.196s
INFO [12-11|13:45:30.379] Generating DAG in progress               epoch=1 percentage=27 elapsed=16.924s
INFO [12-11|13:45:30.988] Generating DAG in progress               epoch=1 percentage=28 elapsed=17.532s
INFO [12-11|13:45:31.552] Generating DAG in progress               epoch=1 percentage=29 elapsed=18.096s
INFO [12-11|13:45:32.110] Generating DAG in progress               epoch=1 percentage=30 elapsed=18.654s
INFO [12-11|13:45:32.695] Generating DAG in progress               epoch=1 percentage=31 elapsed=19.240s
INFO [12-11|13:45:33.247] Generating DAG in progress               epoch=1 percentage=32 elapsed=19.792s
INFO [12-11|13:45:33.798] Generating DAG in progress               epoch=1 percentage=33 elapsed=20.343s
INFO [12-11|13:45:34.470] Generating DAG in progress               epoch=1 percentage=34 elapsed=21.015s
INFO [12-11|13:45:35.038] Generating DAG in progress               epoch=1 percentage=35 elapsed=21.582s
INFO [12-11|13:45:35.613] Generating DAG in progress               epoch=1 percentage=36 elapsed=22.157s
INFO [12-11|13:45:36.261] Generating DAG in progress               epoch=1 percentage=37 elapsed=22.806s
INFO [12-11|13:45:36.409] Successfully sealed new block            number=1 sealhash=c2f120…234402 hash=afd56b…199837 elapsed=1m18.236s
INFO [12-11|13:45:36.409] 🔨 mined potential block                  number=1 hash=afd56b…199837
INFO [12-11|13:45:36.411] Commit new mining work                   number=2 sealhash=98eaab…79e1c1 uncles=0 txs=0 gas=0 fees=0 elapsed=455.057µs
INFO [12-11|13:45:36.827] Successfully sealed new block            number=2 sealhash=98eaab…79e1c1 hash=a8625f…19dd8c elapsed=416.551ms
INFO [12-11|13:45:36.827] 🔨 mined potential block                  number=2 hash=a8625f…19dd8c
INFO [12-11|13:45:36.828] Commit new mining work                   number=3 sealhash=d9654a…b992f0 uncles=0 txs=0 gas=0 fees=0 elapsed=163.096µs
INFO [12-11|13:45:36.889] Generating DAG in progress               epoch=1 percentage=38 elapsed=23.433s
INFO [12-11|13:45:37.622] Generating DAG in progress               epoch=1 percentage=39 elapsed=24.166s
INFO [12-11|13:45:38.324] Generating DAG in progress               epoch=1 percentage=40 elapsed=24.869s
INFO [12-11|13:45:38.955] Generating DAG in progress               epoch=1 percentage=41 elapsed=25.499s
INFO [12-11|13:45:39.609] Generating DAG in progress               epoch=1 percentage=42 elapsed=26.153s
INFO [12-11|13:45:40.205] Generating DAG in progress               epoch=1 percentage=43 elapsed=26.749s
INFO [12-11|13:45:40.763] Generating DAG in progress               epoch=1 percentage=44 elapsed=27.307s
INFO [12-11|13:45:41.311] Generating DAG in progress               epoch=1 percentage=45 elapsed=27.855s
INFO [12-11|13:45:41.895] Generating DAG in progress               epoch=1 percentage=46 elapsed=28.440s
INFO [12-11|13:45:42.185] Successfully sealed new block            number=3 sealhash=d9654a…b992f0 hash=1ecaec…a05ddf elapsed=5.357s
INFO [12-11|13:45:42.185] 🔨 mined potential block                  number=3 hash=1ecaec…a05ddf
INFO [12-11|13:45:42.186] Commit new mining work                   number=4 sealhash=aaf8fc…0f513c uncles=0 txs=0 gas=0 fees=0 elapsed=157.859µs
INFO [12-11|13:45:42.467] Generating DAG in progress               epoch=1 percentage=47 elapsed=29.012s
INFO [12-11|13:45:43.042] Generating DAG in progress               epoch=1 percentage=48 elapsed=29.587s
INFO [12-11|13:45:43.597] Generating DAG in progress               epoch=1 percentage=49 elapsed=30.141s
INFO [12-11|13:45:44.178] Generating DAG in progress               epoch=1 percentage=50 elapsed=30.723s
INFO [12-11|13:45:44.745] Generating DAG in progress               epoch=1 percentage=51 elapsed=31.290s
INFO [12-11|13:45:45.403] Generating DAG in progress               epoch=1 percentage=52 elapsed=31.947s
INFO [12-11|13:45:45.758] Successfully sealed new block            number=4 sealhash=aaf8fc…0f513c hash=1df015…181492 elapsed=3.572s
INFO [12-11|13:45:45.758] 🔨 mined potential block                  number=4 hash=1df015…181492
INFO [12-11|13:45:45.758] Commit new mining work                   number=5 sealhash=38c1fe…b57119 uncles=0 txs=0 gas=0 fees=0 elapsed=147.158µs
INFO [12-11|13:45:45.989] Generating DAG in progress               epoch=1 percentage=53 elapsed=32.534s
INFO [12-11|13:45:46.540] Generating DAG in progress               epoch=1 percentage=54 elapsed=33.085s
INFO [12-11|13:45:47.112] Generating DAG in progress               epoch=1 percentage=55 elapsed=33.657s
INFO [12-11|13:45:47.651] Generating DAG in progress               epoch=1 percentage=56 elapsed=34.196s
INFO [12-11|13:45:48.365] Generating DAG in progress               epoch=1 percentage=57 elapsed=34.909s
INFO [12-11|13:45:49.084] Generating DAG in progress               epoch=1 percentage=58 elapsed=35.629s
INFO [12-11|13:45:49.323] Successfully sealed new block            number=5 sealhash=38c1fe…b57119 hash=6154a2…185955 elapsed=3.564s
INFO [12-11|13:45:49.323] 🔨 mined potential block                  number=5 hash=6154a2…185955
INFO [12-11|13:45:49.325] Commit new mining work                   number=6 sealhash=11fc97…175c70 uncles=0 txs=0 gas=0 fees=0 elapsed=1.916ms
INFO [12-11|13:45:49.701] Generating DAG in progress               epoch=1 percentage=59 elapsed=36.245s
INFO [12-11|13:45:50.285] Generating DAG in progress               epoch=1 percentage=60 elapsed=36.830s
INFO [12-11|13:45:50.953] Generating DAG in progress               epoch=1 percentage=61 elapsed=37.498s
INFO [12-11|13:45:51.521] Generating DAG in progress               epoch=1 percentage=62 elapsed=38.066s
INFO [12-11|13:45:52.126] Generating DAG in progress               epoch=1 percentage=63 elapsed=38.671s
INFO [12-11|13:45:52.803] Generating DAG in progress               epoch=1 percentage=64 elapsed=39.348s
INFO [12-11|13:45:53.478] Generating DAG in progress               epoch=1 percentage=65 elapsed=40.023s
INFO [12-11|13:45:54.160] Generating DAG in progress               epoch=1 percentage=66 elapsed=40.705s
INFO [12-11|13:45:54.600] Successfully sealed new block            number=6 sealhash=11fc97…175c70 hash=a4ada0…eac23d elapsed=5.275s
INFO [12-11|13:45:54.600] 🔨 mined potential block                  number=6 hash=a4ada0…eac23d
INFO [12-11|13:45:54.600] Commit new mining work                   number=7 sealhash=242451…2be0f1 uncles=0 txs=0 gas=0 fees=0 elapsed=201.822µs
INFO [12-11|13:45:54.764] Generating DAG in progress               epoch=1 percentage=67 elapsed=41.309s
INFO [12-11|13:45:55.311] Generating DAG in progress               epoch=1 percentage=68 elapsed=41.856s
INFO [12-11|13:45:55.899] Generating DAG in progress               epoch=1 percentage=69 elapsed=42.444s
INFO [12-11|13:45:56.543] Generating DAG in progress               epoch=1 percentage=70 elapsed=43.088s
INFO [12-11|13:45:57.114] Generating DAG in progress               epoch=1 percentage=71 elapsed=43.659s
INFO [12-11|13:45:57.671] Generating DAG in progress               epoch=1 percentage=72 elapsed=44.217s
INFO [12-11|13:45:58.243] Generating DAG in progress               epoch=1 percentage=73 elapsed=44.789s
INFO [12-11|13:45:58.918] Successfully sealed new block            number=7 sealhash=242451…2be0f1 hash=d43ec9…cd72b2 elapsed=4.317s
INFO [12-11|13:45:58.918] 🔨 mined potential block                  number=7 hash=d43ec9…cd72b2
INFO [12-11|13:45:58.918] Commit new mining work                   number=8 sealhash=573656…c7d625 uncles=0 txs=0 gas=0 fees=0 elapsed=163.191µs
INFO [12-11|13:45:58.951] Generating DAG in progress               epoch=1 percentage=74 elapsed=45.497s
INFO [12-11|13:45:59.611] Generating DAG in progress               epoch=1 percentage=75 elapsed=46.156s
INFO [12-11|13:46:00.172] Generating DAG in progress               epoch=1 percentage=76 elapsed=46.717s
INFO [12-11|13:46:00.729] Generating DAG in progress               epoch=1 percentage=77 elapsed=47.274s
INFO [12-11|13:46:01.301] Generating DAG in progress               epoch=1 percentage=78 elapsed=47.846s
INFO [12-11|13:46:01.980] Generating DAG in progress               epoch=1 percentage=79 elapsed=48.525s
INFO [12-11|13:46:02.530] Generating DAG in progress               epoch=1 percentage=80 elapsed=49.075s
INFO [12-11|13:46:03.102] Generating DAG in progress               epoch=1 percentage=81 elapsed=49.647s
INFO [12-11|13:46:03.661] Successfully sealed new block            number=8 sealhash=573656…c7d625 hash=05b5e0…581ba2 elapsed=4.742s
INFO [12-11|13:46:03.661] 🔗 block reached canonical chain          number=1 hash=afd56b…199837
INFO [12-11|13:46:03.661] 🔨 mined potential block                  number=8 hash=05b5e0…581ba2
INFO [12-11|13:46:03.661] Commit new mining work                   number=9 sealhash=924546…5debe9 uncles=0 txs=0 gas=0 fees=0 elapsed=149.547µs
INFO [12-11|13:46:03.674] Generating DAG in progress               epoch=1 percentage=82 elapsed=50.219s
INFO [12-11|13:46:04.238] Generating DAG in progress               epoch=1 percentage=83 elapsed=50.783s
INFO [12-11|13:46:04.787] Generating DAG in progress               epoch=1 percentage=84 elapsed=51.332s
INFO [12-11|13:46:05.367] Generating DAG in progress               epoch=1 percentage=85 elapsed=51.912s
INFO [12-11|13:46:05.916] Generating DAG in progress               epoch=1 percentage=86 elapsed=52.462s
INFO [12-11|13:46:06.009] Successfully sealed new block            number=9 sealhash=924546…5debe9 hash=3ece06…900bda elapsed=2.347s
INFO [12-11|13:46:06.009] 🔗 block reached canonical chain          number=2 hash=a8625f…19dd8c
INFO [12-11|13:46:06.009] 🔨 mined potential block                  number=9 hash=3ece06…900bda
INFO [12-11|13:46:06.009] Commit new mining work                   number=10 sealhash=7d948a…190f8d uncles=0 txs=0 gas=0 fees=0 elapsed=145.637µs
INFO [12-11|13:46:06.258] Successfully sealed new block            number=10 sealhash=7d948a…190f8d hash=c626cd…7f0307 elapsed=248.839ms
INFO [12-11|13:46:06.258] 🔗 block reached canonical chain          number=3  hash=1ecaec…a05ddf
INFO [12-11|13:46:06.258] 🔨 mined potential block                  number=10 hash=c626cd…7f0307
INFO [12-11|13:46:06.258] Commit new mining work                   number=11 sealhash=ef3555…89e5cf uncles=0 txs=0 gas=0 fees=0 elapsed=134.435µs
INFO [12-11|13:46:06.510] Generating DAG in progress               epoch=1 percentage=87 elapsed=53.056s
INFO [12-11|13:46:07.158] Generating DAG in progress               epoch=1 percentage=88 elapsed=53.704s
INFO [12-11|13:46:07.778] Generating DAG in progress               epoch=1 percentage=89 elapsed=54.324s
INFO [12-11|13:46:08.444] Generating DAG in progress               epoch=1 percentage=90 elapsed=54.989s
INFO [12-11|13:46:09.155] Generating DAG in progress               epoch=1 percentage=91 elapsed=55.701s
INFO [12-11|13:46:09.775] Successfully sealed new block            number=11 sealhash=ef3555…89e5cf hash=595839…9488b4 elapsed=3.517s
INFO [12-11|13:46:09.775] 🔗 block reached canonical chain          number=4  hash=1df015…181492
INFO [12-11|13:46:09.775] 🔨 mined potential block                  number=11 hash=595839…9488b4
INFO [12-11|13:46:09.776] Commit new mining work                   number=12 sealhash=7cc7a0…6dd1c3 uncles=0 txs=0 gas=0 fees=0 elapsed=166.5µs
INFO [12-11|13:46:09.981] Generating DAG in progress               epoch=1 percentage=92 elapsed=56.527s
INFO [12-11|13:46:10.549] Generating DAG in progress               epoch=1 percentage=93 elapsed=57.094s
INFO [12-11|13:46:11.111] Generating DAG in progress               epoch=1 percentage=94 elapsed=57.656s
INFO [12-11|13:46:11.688] Generating DAG in progress               epoch=1 percentage=95 elapsed=58.234s
INFO [12-11|13:46:12.256] Generating DAG in progress               epoch=1 percentage=96 elapsed=58.801s
INFO [12-11|13:46:12.925] Generating DAG in progress               epoch=1 percentage=97 elapsed=59.471s
INFO [12-11|13:46:13.480] Generating DAG in progress               epoch=1 percentage=98 elapsed=1m0.026s
INFO [12-11|13:46:14.218] Generating DAG in progress               epoch=1 percentage=99 elapsed=1m0.764s
INFO [12-11|13:46:14.220] Generated ethash verification cache      epoch=1 elapsed=1m0.765s
INFO [12-11|13:46:18.120] Successfully sealed new block            number=12 sealhash=7cc7a0…6dd1c3 hash=992f24…d23d79 elapsed=8.344s
INFO [12-11|13:46:18.120] 🔗 block reached canonical chain          number=5  hash=6154a2…185955
INFO [12-11|13:46:18.120] 🔨 mined potential block                  number=12 hash=992f24…d23d79
INFO [12-11|13:46:18.120] Commit new mining work                   number=13 sealhash=432f67…82ac1d uncles=0 txs=0 gas=0 fees=0 elapsed=178.353µs
INFO [12-11|13:46:19.264] Successfully sealed new block            number=13 sealhash=432f67…82ac1d hash=474c99…0e3de9 elapsed=1.144s
INFO [12-11|13:46:19.264] 🔗 block reached canonical chain          number=6  hash=a4ada0…eac23d
INFO [12-11|13:46:19.265] 🔨 mined potential block                  number=13 hash=474c99…0e3de9
INFO [12-11|13:46:19.265] Commit new mining work                   number=14 sealhash=c9c1e6…b85932 uncles=0 txs=0 gas=0 fees=0 elapsed=172.035µs
INFO [12-11|13:46:20.763] Successfully sealed new block            number=14 sealhash=c9c1e6…b85932 hash=652b14…a80abb elapsed=1.498s
INFO [12-11|13:46:20.763] 🔗 block reached canonical chain          number=7  hash=d43ec9…cd72b2
INFO [12-11|13:46:20.763] 🔨 mined potential block                  number=14 hash=652b14…a80abb
INFO [12-11|13:46:20.763] Commit new mining work                   number=15 sealhash=96e957…6bd53c uncles=0 txs=0 gas=0 fees=0 elapsed=128.039µs
INFO [12-11|13:46:21.078] Successfully sealed new block            number=15 sealhash=96e957…6bd53c hash=67e707…20ee70 elapsed=314.601ms
INFO [12-11|13:46:21.078] 🔗 block reached canonical chain          number=8  hash=05b5e0…581ba2
INFO [12-11|13:46:21.078] 🔨 mined potential block                  number=15 hash=67e707…20ee70
INFO [12-11|13:46:21.078] Commit new mining work                   number=16 sealhash=d2bdf1…e3329d uncles=0 txs=0 gas=0 fees=0 elapsed=126.89µs
INFO [12-11|13:46:22.963] Successfully sealed new block            number=16 sealhash=d2bdf1…e3329d hash=5fe649…bc3e9e elapsed=1.885s
INFO [12-11|13:46:22.964] 🔗 block reached canonical chain          number=9  hash=3ece06…900bda
INFO [12-11|13:46:22.964] 🔨 mined potential block                  number=16 hash=5fe649…bc3e9e
INFO [12-11|13:46:22.965] Commit new mining work                   number=17 sealhash=4e9ca6…eca22b uncles=0 txs=0 gas=0 fees=0 elapsed=189.513µs
INFO [12-11|13:46:24.157] Successfully sealed new block            number=17 sealhash=4e9ca6…eca22b hash=6ab565…289ba8 elapsed=1.192s
INFO [12-11|13:46:24.158] 🔗 block reached canonical chain          number=10 hash=c626cd…7f0307
INFO [12-11|13:46:24.158] 🔨 mined potential block                  number=17 hash=6ab565…289ba8
INFO [12-11|13:46:24.158] Commit new mining work                   number=18 sealhash=0c4976…03ad54 uncles=0 txs=0 gas=0 fees=0 elapsed=130.498µs
INFO [12-11|13:46:26.627] Successfully sealed new block            number=18 sealhash=0c4976…03ad54 hash=eef581…655c7a elapsed=2.469s
INFO [12-11|13:46:26.628] 🔗 block reached canonical chain          number=11 hash=595839…9488b4
INFO [12-11|13:46:26.628] 🔨 mined potential block                  number=18 hash=eef581…655c7a
INFO [12-11|13:46:26.628] Commit new mining work                   number=19 sealhash=a05187…cfc58e uncles=0 txs=0 gas=0 fees=0 elapsed=143.802µs
INFO [12-11|13:46:30.772] Successfully sealed new block            number=19 sealhash=a05187…cfc58e hash=2e7ea5…294298 elapsed=4.144s
INFO [12-11|13:46:30.772] 🔗 block reached canonical chain          number=12 hash=992f24…d23d79
INFO [12-11|13:46:30.772] 🔨 mined potential block                  number=19 hash=2e7ea5…294298
INFO [12-11|13:46:30.772] Commit new mining work                   number=20 sealhash=adc93f…2351d0 uncles=0 txs=0 gas=0 fees=0 elapsed=128.289µs
INFO [12-11|13:46:30.788] Successfully sealed new block            number=20 sealhash=adc93f…2351d0 hash=298c19…82beca elapsed=16.060ms
INFO [12-11|13:46:30.788] 🔗 block reached canonical chain          number=13 hash=474c99…0e3de9
INFO [12-11|13:46:30.788] 🔨 mined potential block                  number=20 hash=298c19…82beca
INFO [12-11|13:46:30.788] Commit new mining work                   number=21 sealhash=7f2c8f…c7c21d uncles=0 txs=0 gas=0 fees=0 elapsed=162.412µs
INFO [12-11|13:46:30.896] Successfully sealed new block            number=21 sealhash=7f2c8f…c7c21d hash=7c3271…e3b352 elapsed=108.008ms
INFO [12-11|13:46:30.896] 🔗 block reached canonical chain          number=14 hash=652b14…a80abb
INFO [12-11|13:46:30.896] 🔨 mined potential block                  number=21 hash=7c3271…e3b352
INFO [12-11|13:46:30.896] Mining too far in the future             wait=2s
INFO [12-11|13:46:32.898] Commit new mining work                   number=22 sealhash=b65eec…9fa33b uncles=0 txs=0 gas=0 fees=0 elapsed=2.001s
INFO [12-11|13:46:38.608] Successfully sealed new block            number=22 sealhash=b65eec…9fa33b hash=0a6f7e…fe2269 elapsed=5.709s
INFO [12-11|13:46:38.608] 🔗 block reached canonical chain          number=15 hash=67e707…20ee70
INFO [12-11|13:46:38.608] 🔨 mined potential block                  number=22 hash=0a6f7e…fe2269
INFO [12-11|13:46:38.608] Commit new mining work                   number=23 sealhash=d70228…8e8c02 uncles=0 txs=0 gas=0 fees=0 elapsed=183.954µs
INFO [12-11|13:46:42.686] Successfully sealed new block            number=23 sealhash=d70228…8e8c02 hash=da3ace…db137b elapsed=4.077s
INFO [12-11|13:46:42.686] 🔗 block reached canonical chain          number=16 hash=5fe649…bc3e9e
INFO [12-11|13:46:42.686] 🔨 mined potential block                  number=23 hash=da3ace…db137b
INFO [12-11|13:46:42.686] Commit new mining work                   number=24 sealhash=1583ac…b93fe9 uncles=0 txs=0 gas=0 fees=0 elapsed=171.287µs
INFO [12-11|13:46:46.093] Successfully sealed new block            number=24 sealhash=1583ac…b93fe9 hash=65381f…41798d elapsed=3.407s
INFO [12-11|13:46:46.093] 🔗 block reached canonical chain          number=17 hash=6ab565…289ba8
INFO [12-11|13:46:46.093] 🔨 mined potential block                  number=24 hash=65381f…41798d
INFO [12-11|13:46:46.093] Commit new mining work                   number=25 sealhash=640f8b…0b5605 uncles=0 txs=0 gas=0 fees=0 elapsed=163.647µs
INFO [12-11|13:46:49.316] Successfully sealed new block            number=25 sealhash=640f8b…0b5605 hash=f5a7e4…1333fd elapsed=3.222s
INFO [12-11|13:46:49.316] 🔗 block reached canonical chain          number=18 hash=eef581…655c7a
INFO [12-11|13:46:49.316] 🔨 mined potential block                  number=25 hash=f5a7e4…1333fd
INFO [12-11|13:46:49.316] Commit new mining work                   number=26 sealhash=b39c80…b9ca93 uncles=0 txs=0 gas=0 fees=0 elapsed=126.314µs
INFO [12-11|13:46:52.614] Successfully sealed new block            number=26 sealhash=b39c80…b9ca93 hash=59a2b4…f42d88 elapsed=3.297s
INFO [12-11|13:46:52.614] 🔗 block reached canonical chain          number=19 hash=2e7ea5…294298
INFO [12-11|13:46:52.614] 🔨 mined potential block                  number=26 hash=59a2b4…f42d88
INFO [12-11|13:46:52.614] Commit new mining work                   number=27 sealhash=c7701a…e3a6d4 uncles=0 txs=0 gas=0 fees=0 elapsed=195.198µs
INFO [12-11|13:46:52.664] Successfully sealed new block            number=27 sealhash=c7701a…e3a6d4 hash=829d13…6ffce9 elapsed=49.547ms
INFO [12-11|13:46:52.664] 🔗 block reached canonical chain          number=20 hash=298c19…82beca
INFO [12-11|13:46:52.664] 🔨 mined potential block                  number=27 hash=829d13…6ffce9
INFO [12-11|13:46:52.664] Commit new mining work                   number=28 sealhash=79c7a1…953009 uncles=0 txs=0 gas=0 fees=0 elapsed=132.965µs
INFO [12-11|13:46:56.097] Successfully sealed new block            number=28 sealhash=79c7a1…953009 hash=15ea96…7355e7 elapsed=3.433s
INFO [12-11|13:46:56.097] 🔗 block reached canonical chain          number=21 hash=7c3271…e3b352
INFO [12-11|13:46:56.097] 🔨 mined potential block                  number=28 hash=15ea96…7355e7
INFO [12-11|13:46:56.097] Commit new mining work                   number=29 sealhash=4e7d95…472060 uncles=0 txs=0 gas=0 fees=0 elapsed=155.972µs
INFO [12-11|13:46:58.630] Successfully sealed new block            number=29 sealhash=4e7d95…472060 hash=e0d158…d64643 elapsed=2.533s
INFO [12-11|13:46:58.631] 🔗 block reached canonical chain          number=22 hash=0a6f7e…fe2269
INFO [12-11|13:46:58.631] 🔨 mined potential block                  number=29 hash=e0d158…d64643
INFO [12-11|13:46:58.631] Commit new mining work                   number=30 sealhash=a77f4c…3d1af5 uncles=0 txs=0 gas=0 fees=0 elapsed=152.643µs
INFO [12-11|13:47:02.832] Successfully sealed new block            number=30 sealhash=a77f4c…3d1af5 hash=d656e6…4d2c26 elapsed=4.201s
INFO [12-11|13:47:02.832] 🔗 block reached canonical chain          number=23 hash=da3ace…db137b
INFO [12-11|13:47:02.832] 🔨 mined potential block                  number=30 hash=d656e6…4d2c26
INFO [12-11|13:47:02.833] Commit new mining work                   number=31 sealhash=a8a7f7…80702b uncles=0 txs=0 gas=0 fees=0 elapsed=181.499µs
INFO [12-11|13:47:02.839] Successfully sealed new block            number=31 sealhash=a8a7f7…80702b hash=e2147b…57660c elapsed=6.668ms
INFO [12-11|13:47:02.839] 🔗 block reached canonical chain          number=24 hash=65381f…41798d
INFO [12-11|13:47:02.839] 🔨 mined potential block                  number=31 hash=e2147b…57660c
INFO [12-11|13:47:02.839] Commit new mining work                   number=32 sealhash=ff6554…b30de0 uncles=0 txs=0 gas=0 fees=0 elapsed=104.347µs
INFO [12-11|13:47:04.121] Successfully sealed new block            number=32 sealhash=ff6554…b30de0 hash=a33385…34e11e elapsed=1.281s
INFO [12-11|13:47:04.121] 🔗 block reached canonical chain          number=25 hash=f5a7e4…1333fd
INFO [12-11|13:47:04.121] 🔨 mined potential block                  number=32 hash=a33385…34e11e
INFO [12-11|13:47:04.122] Commit new mining work                   number=33 sealhash=1987d8…612709 uncles=0 txs=0 gas=0 fees=0 elapsed=130.689µs
INFO [12-11|13:47:13.088] Successfully sealed new block            number=33 sealhash=1987d8…612709 hash=095e09…e38945 elapsed=8.966s
INFO [12-11|13:47:13.088] 🔗 block reached canonical chain          number=26 hash=59a2b4…f42d88
INFO [12-11|13:47:13.088] 🔨 mined potential block                  number=33 hash=095e09…e38945
INFO [12-11|13:47:13.088] Commit new mining work                   number=34 sealhash=1c795f…ab60c2 uncles=0 txs=0 gas=0 fees=0 elapsed=162.047µs
INFO [12-11|13:47:13.379] Successfully sealed new block            number=34 sealhash=1c795f…ab60c2 hash=1941df…4c6716 elapsed=290.943ms
INFO [12-11|13:47:13.379] 🔗 block reached canonical chain          number=27 hash=829d13…6ffce9
INFO [12-11|13:47:13.379] 🔨 mined potential block                  number=34 hash=1941df…4c6716
INFO [12-11|13:47:13.379] Commit new mining work                   number=35 sealhash=8a86d1…1d3435 uncles=0 txs=0 gas=0 fees=0 elapsed=165.928µs
INFO [12-11|13:47:13.730] Successfully sealed new block            number=35 sealhash=8a86d1…1d3435 hash=0ef879…ff0dc0 elapsed=350.498ms
INFO [12-11|13:47:13.730] 🔗 block reached canonical chain          number=28 hash=15ea96…7355e7
INFO [12-11|13:47:13.730] 🔨 mined potential block                  number=35 hash=0ef879…ff0dc0
INFO [12-11|13:47:13.730] Mining too far in the future             wait=2s
INFO [12-11|13:47:15.733] Commit new mining work                   number=36 sealhash=a9a097…611f6d uncles=0 txs=0 gas=0 fees=0 elapsed=2.003s
INFO [12-11|13:47:16.961] Successfully sealed new block            number=36 sealhash=a9a097…611f6d hash=7b1453…74644d elapsed=1.227s
INFO [12-11|13:47:16.961] 🔗 block reached canonical chain          number=29 hash=e0d158…d64643
INFO [12-11|13:47:16.961] 🔨 mined potential block                  number=36 hash=7b1453…74644d
INFO [12-11|13:47:16.961] Commit new mining work                   number=37 sealhash=d1f34d…e3388c uncles=0 txs=0 gas=0 fees=0 elapsed=224.671µs
INFO [12-11|13:47:18.550] Successfully sealed new block            number=37 sealhash=d1f34d…e3388c hash=6ba065…6c57ff elapsed=1.589s
INFO [12-11|13:47:18.550] 🔗 block reached canonical chain          number=30 hash=d656e6…4d2c26
INFO [12-11|13:47:18.550] 🔨 mined potential block                  number=37 hash=6ba065…6c57ff
INFO [12-11|13:47:18.550] Commit new mining work                   number=38 sealhash=38690e…e8c7c2 uncles=0 txs=0 gas=0 fees=0 elapsed=147.235µs
INFO [12-11|13:47:24.332] Successfully sealed new block            number=38 sealhash=38690e…e8c7c2 hash=15392c…b4cc23 elapsed=5.781s
INFO [12-11|13:47:24.332] 🔗 block reached canonical chain          number=31 hash=e2147b…57660c
INFO [12-11|13:47:24.332] 🔨 mined potential block                  number=38 hash=15392c…b4cc23
INFO [12-11|13:47:24.332] Commit new mining work                   number=39 sealhash=04fceb…e844e4 uncles=0 txs=0 gas=0 fees=0 elapsed=117.912µs
INFO [12-11|13:47:29.470] Successfully sealed new block            number=39 sealhash=04fceb…e844e4 hash=e92548…3e0119 elapsed=5.138s
INFO [12-11|13:47:29.470] 🔗 block reached canonical chain          number=32 hash=a33385…34e11e
INFO [12-11|13:47:29.470] 🔨 mined potential block                  number=39 hash=e92548…3e0119
INFO [12-11|13:47:29.470] Commit new mining work                   number=40 sealhash=392b03…a5000e uncles=0 txs=0 gas=0 fees=0 elapsed=165.899µs
INFO [12-11|13:47:30.667] Successfully sealed new block            number=40 sealhash=392b03…a5000e hash=a06a23…07253f elapsed=1.196s
INFO [12-11|13:47:30.667] 🔗 block reached canonical chain          number=33 hash=095e09…e38945
INFO [12-11|13:47:30.667] 🔨 mined potential block                  number=40 hash=a06a23…07253f
INFO [12-11|13:47:30.667] Commit new mining work                   number=41 sealhash=7475b0…9803dc uncles=0 txs=0 gas=0 fees=0 elapsed=142.216µs
INFO [12-11|13:47:34.662] Successfully sealed new block            number=41 sealhash=7475b0…9803dc hash=fe8a13…2264cf elapsed=3.994s
INFO [12-11|13:47:34.662] 🔗 block reached canonical chain          number=34 hash=1941df…4c6716
INFO [12-11|13:47:34.662] 🔨 mined potential block                  number=41 hash=fe8a13…2264cf
INFO [12-11|13:47:34.662] Commit new mining work                   number=42 sealhash=957ff1…d83036 uncles=0 txs=0 gas=0 fees=0 elapsed=177.801µs
INFO [12-11|13:47:37.333] Successfully sealed new block            number=42 sealhash=957ff1…d83036 hash=091131…700abc elapsed=2.670s
INFO [12-11|13:47:37.333] 🔗 block reached canonical chain          number=35 hash=0ef879…ff0dc0
INFO [12-11|13:47:37.333] 🔨 mined potential block                  number=42 hash=091131…700abc
INFO [12-11|13:47:37.333] Commit new mining work                   number=43 sealhash=d0232a…6940a6 uncles=0 txs=0 gas=0 fees=0 elapsed=192.373µs
INFO [12-11|13:47:38.916] Successfully sealed new block            number=43 sealhash=d0232a…6940a6 hash=bd45be…d9c0eb elapsed=1.583s
INFO [12-11|13:47:38.916] 🔗 block reached canonical chain          number=36 hash=7b1453…74644d
INFO [12-11|13:47:38.916] 🔨 mined potential block                  number=43 hash=bd45be…d9c0eb
INFO [12-11|13:47:38.917] Commit new mining work                   number=44 sealhash=d74b74…9ab878 uncles=0 txs=0 gas=0 fees=0 elapsed=125.795µs
INFO [12-11|13:47:42.159] Successfully sealed new block            number=44 sealhash=d74b74…9ab878 hash=b7c1a6…6749be elapsed=3.242s
INFO [12-11|13:47:42.159] 🔗 block reached canonical chain          number=37 hash=6ba065…6c57ff
INFO [12-11|13:47:42.159] 🔨 mined potential block                  number=44 hash=b7c1a6…6749be
INFO [12-11|13:47:42.159] Commit new mining work                   number=45 sealhash=4f8089…104aeb uncles=0 txs=0 gas=0 fees=0 elapsed=158.404µs
INFO [12-11|13:47:45.593] Successfully sealed new block            number=45 sealhash=4f8089…104aeb hash=52efaf…d77fd8 elapsed=3.434s
INFO [12-11|13:47:45.594] 🔗 block reached canonical chain          number=38 hash=15392c…b4cc23
INFO [12-11|13:47:45.594] 🔨 mined potential block                  number=45 hash=52efaf…d77fd8
INFO [12-11|13:47:45.594] Commit new mining work                   number=46 sealhash=de667b…56bb54 uncles=0 txs=0 gas=0 fees=0 elapsed=179.179µs
INFO [12-11|13:47:46.986] Successfully sealed new block            number=46 sealhash=de667b…56bb54 hash=22e0f6…616260 elapsed=1.391s
INFO [12-11|13:47:46.986] 🔗 block reached canonical chain          number=39 hash=e92548…3e0119
INFO [12-11|13:47:46.986] 🔨 mined potential block                  number=46 hash=22e0f6…616260
INFO [12-11|13:47:46.986] Commit new mining work                   number=47 sealhash=49bf27…06cfac uncles=0 txs=0 gas=0 fees=0 elapsed=150.392µs
INFO [12-11|13:47:58.892] Successfully sealed new block            number=47 sealhash=49bf27…06cfac hash=b4d09c…9c2a6f elapsed=11.906s
INFO [12-11|13:47:58.892] 🔗 block reached canonical chain          number=40 hash=a06a23…07253f
INFO [12-11|13:47:58.892] 🔨 mined potential block                  number=47 hash=b4d09c…9c2a6f
INFO [12-11|13:47:58.893] Commit new mining work                   number=48 sealhash=dd1fd2…431ca7 uncles=0 txs=0 gas=0 fees=0 elapsed=182.386µs
INFO [12-11|13:47:59.399] Successfully sealed new block            number=48 sealhash=dd1fd2…431ca7 hash=a53378…71d206 elapsed=506.529ms
INFO [12-11|13:47:59.399] 🔗 block reached canonical chain          number=41 hash=fe8a13…2264cf
INFO [12-11|13:47:59.399] 🔨 mined potential block                  number=48 hash=a53378…71d206
INFO [12-11|13:47:59.399] Commit new mining work                   number=49 sealhash=b8597d…9ddb5f uncles=0 txs=0 gas=0 fees=0 elapsed=122.102µs
INFO [12-11|13:48:00.833] Successfully sealed new block            number=49 sealhash=b8597d…9ddb5f hash=c65ca2…9e23f8 elapsed=1.433s
INFO [12-11|13:48:00.833] 🔗 block reached canonical chain          number=42 hash=091131…700abc
INFO [12-11|13:48:00.833] 🔨 mined potential block                  number=49 hash=c65ca2…9e23f8
INFO [12-11|13:48:00.833] Commit new mining work                   number=50 sealhash=b9949a…e6da8c uncles=0 txs=0 gas=0 fees=0 elapsed=173.417µs
INFO [12-11|13:48:05.704] Successfully sealed new block            number=50 sealhash=b9949a…e6da8c hash=5c0eef…4d25ac elapsed=4.871s
INFO [12-11|13:48:05.704] 🔗 block reached canonical chain          number=43 hash=bd45be…d9c0eb
INFO [12-11|13:48:05.704] 🔨 mined potential block                  number=50 hash=5c0eef…4d25ac
INFO [12-11|13:48:05.705] Commit new mining work                   number=51 sealhash=c6c42d…de6646 uncles=0 txs=0 gas=0 fees=0 elapsed=228.523µs
INFO [12-11|13:48:05.894] Successfully sealed new block            number=51 sealhash=c6c42d…de6646 hash=7f343e…44dbc8 elapsed=189.664ms
INFO [12-11|13:48:05.894] 🔗 block reached canonical chain          number=44 hash=b7c1a6…6749be
INFO [12-11|13:48:05.894] 🔨 mined potential block                  number=51 hash=7f343e…44dbc8
INFO [12-11|13:48:05.894] Commit new mining work                   number=52 sealhash=b37269…a2f7a7 uncles=0 txs=0 gas=0 fees=0 elapsed=156.898µs
INFO [12-11|13:48:09.742] Successfully sealed new block            number=52 sealhash=b37269…a2f7a7 hash=effb77…ed5b90 elapsed=3.847s
INFO [12-11|13:48:09.742] 🔗 block reached canonical chain          number=45 hash=52efaf…d77fd8
INFO [12-11|13:48:09.742] 🔨 mined potential block                  number=52 hash=effb77…ed5b90
INFO [12-11|13:48:09.742] Commit new mining work                   number=53 sealhash=a9cf99…b76d0f uncles=0 txs=0 gas=0 fees=0 elapsed=171.244µs
INFO [12-11|13:48:11.417] Successfully sealed new block            number=53 sealhash=a9cf99…b76d0f hash=f954a9…035264 elapsed=1.674s
INFO [12-11|13:48:11.417] 🔗 block reached canonical chain          number=46 hash=22e0f6…616260
INFO [12-11|13:48:11.417] 🔨 mined potential block                  number=53 hash=f954a9…035264
INFO [12-11|13:48:11.417] Commit new mining work                   number=54 sealhash=d392cc…0d77a9 uncles=0 txs=0 gas=0 fees=0 elapsed=129.497µs
INFO [12-11|13:48:12.136] Successfully sealed new block            number=54 sealhash=d392cc…0d77a9 hash=6a8319…9dec13 elapsed=718.706ms
INFO [12-11|13:48:12.136] 🔗 block reached canonical chain          number=47 hash=b4d09c…9c2a6f
INFO [12-11|13:48:12.136] 🔨 mined potential block                  number=54 hash=6a8319…9dec13
INFO [12-11|13:48:12.136] Commit new mining work                   number=55 sealhash=75c474…d8ebab uncles=0 txs=0 gas=0 fees=0 elapsed=142.723µs
INFO [12-11|13:48:14.295] Successfully sealed new block            number=55 sealhash=75c474…d8ebab hash=7ce37b…19a23d elapsed=2.158s
INFO [12-11|13:48:14.295] 🔗 block reached canonical chain          number=48 hash=a53378…71d206
INFO [12-11|13:48:14.295] 🔨 mined potential block                  number=55 hash=7ce37b…19a23d
INFO [12-11|13:48:14.295] Commit new mining work                   number=56 sealhash=12d485…04cad9 uncles=0 txs=0 gas=0 fees=0 elapsed=171.099µs
INFO [12-11|13:48:21.210] Successfully sealed new block            number=56 sealhash=12d485…04cad9 hash=9ee9d1…3bce4f elapsed=6.915s
INFO [12-11|13:48:21.210] 🔗 block reached canonical chain          number=49 hash=c65ca2…9e23f8
INFO [12-11|13:48:21.210] 🔨 mined potential block                  number=56 hash=9ee9d1…3bce4f
INFO [12-11|13:48:21.211] Commit new mining work                   number=57 sealhash=afd7ce…15878c uncles=0 txs=0 gas=0 fees=0 elapsed=131.339µs

> mineINFO [12-11|13:48:24.677] Successfully sealed new block            number=57 sealhash=afd7ce…15878c hash=89ac92…15906f elapsed=3.466s
INFO [12-11|13:48:24.677] 🔗 block reached canonical chain          number=50 hash=5c0eef…4d25ac
INFO [12-11|13:48:24.677] 🔨 mined potential block                  number=57 hash=89ac92…15906f
INFO [12-11|13:48:24.678] Commit new mining work                   number=58 sealhash=dd1467…5b9c88 uncles=0 txs=0 gas=0 fees=0 elapsed=162.699µs
INFO [12-11|13:48:28.673] Successfully sealed new block            number=58 sealhash=dd1467…5b9c88 hash=3317ac…19b5f2 elapsed=3.995s
INFO [12-11|13:48:28.673] 🔗 block reached canonical chain          number=51 hash=7f343e…44dbc8
INFO [12-11|13:48:28.673] 🔨 mined potential block                  number=58 hash=3317ac…19b5f2
INFO [12-11|13:48:28.673] Commit new mining work                   number=59 sealhash=a2417e…b3ed22 uncles=0 txs=0 gas=0 fees=0 elapsed=211.882µs
INFO [12-11|13:48:29.213] Successfully sealed new block            number=59 sealhash=a2417e…b3ed22 hash=56eb2e…3f9612 elapsed=539.451ms
INFO [12-11|13:48:29.213] 🔗 block reached canonical chain          number=52 hash=effb77…ed5b90
INFO [12-11|13:48:29.213] 🔨 mined potential block                  number=59 hash=56eb2e…3f9612
INFO [12-11|13:48:29.213] Commit new mining work                   number=60 sealhash=a45f1d…c85ccc uncles=0 txs=0 gas=0 fees=0 elapsed=126.87µs
INFO [12-11|13:48:33.085] Successfully sealed new block            number=60 sealhash=a45f1d…c85ccc hash=411805…02cdb3 elapsed=3.871s
INFO [12-11|13:48:33.085] 🔗 block reached canonical chain          number=53 hash=f954a9…035264
INFO [12-11|13:48:33.085] 🔨 mined potential block                  number=60 hash=411805…02cdb3
INFO [12-11|13:48:33.085] Commit new mining work                   number=61 sealhash=d1a351…286ba0 uncles=0 txs=0 gas=0 fees=0 elapsed=182.164µs
> miner.stopINFO [12-11|13:48:35.580] Successfully sealed new block            number=61 sealhash=d1a351…286ba0 hash=91808a…7dcdd9 elapsed=2.494s
INFO [12-11|13:48:35.580] 🔗 block reached canonical chain          number=54 hash=6a8319…9dec13
INFO [12-11|13:48:35.580] 🔨 mined potential block                  number=61 hash=91808a…7dcdd9
INFO [12-11|13:48:35.580] Commit new mining work                   number=62 sealhash=6ba6c7…47bc93 uncles=0 txs=0 gas=0 fees=0 elapsed=143.763µs
INFO [12-11|13:48:35.648] Successfully sealed new block            number=62 sealhash=6ba6c7…47bc93 hash=446750…0da892 elapsed=68.491ms
INFO [12-11|13:48:35.648] 🔗 block reached canonical chain          number=55 hash=7ce37b…19a23d
INFO [12-11|13:48:35.649] 🔨 mined potential block                  number=62 hash=446750…0da892
INFO [12-11|13:48:35.649] Commit new mining work                   number=63 sealhash=898fbe…daa22b uncles=0 txs=0 gas=0 fees=0 elapsed=105.598µs
~~~

#### Stop Mining ####

~~~shell
> miner.stop()
null
~~~

#### Check Change ####

* accounts get eth for mining
* block mined, and block number increased

~~~shell
> eth.getBalance(eth.accounts[0])
310000000000000000000
> eth.blockNumber
62
> 
~~~


#### Exit Console ####

~~~shell
> exit
INFO [12-11|14:04:00.544] IPC endpoint closed                      endpoint=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data/geth.ipc
INFO [12-11|14:04:00.544] Writing cached state to disk             block=62 hash=446750…0da892 root=60e9fe…e11276
INFO [12-11|14:04:00.544] Persisted trie from memory database      nodes=1 size=149.00B time=355.21µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=62 livesize=9.09kB
INFO [12-11|14:04:00.544] Writing cached state to disk             block=61 hash=91808a…7dcdd9 root=3b3222…4a1b4c
INFO [12-11|14:04:00.544] Persisted trie from memory database      nodes=1 size=149.00B time=32.772µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=61 livesize=8.94kB
INFO [12-11|14:04:00.545] Blockchain manager stopped 
INFO [12-11|14:04:00.545] Stopping Ethereum protocol 
INFO [12-11|14:04:00.545] Ethereum protocol stopped 
INFO [12-11|14:04:00.545] Transaction pool stopped 
INFO [12-11|14:04:00.546] Database closed                          database=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data/geth/chaindata
~~~

### Check DataDir Change ###

* A new node created

~~~shell
HAIMHUAN-M-40YV:AjonbinChain haimhuan$ tree data/
data/
├── geth
│   ├── LOCK
│   ├── chaindata
│   │   ├── 000002.ldb
│   │   ├── 000003.log
│   │   ├── CURRENT
│   │   ├── CURRENT.bak
│   │   ├── LOCK
│   │   ├── LOG
│   │   └── MANIFEST-000004
│   ├── lightchaindata
│   │   ├── 000001.log
│   │   ├── CURRENT
│   │   ├── LOCK
│   │   ├── LOG
│   │   └── MANIFEST-000000
│   ├── nodekey
│   ├── nodes
│   │   ├── 000001.log
│   │   ├── CURRENT
│   │   ├── LOCK
│   │   ├── LOG
│   │   └── MANIFEST-000000
│   └── transactions.rlp
├── history
└── keystore
    ├── UTC--2018-12-11T05-35-04.520519000Z--5bf9178861a5fecd9f7af0a1145e7c893402ca10
    └── UTC--2018-12-11T05-35-31.743691000Z--2c78ad8dc25aa31beb9adf696b4a0c9544f865cd

5 directories, 23 files
~~~

## New Transaction and Block ##

### Start Console

~~~shell
$ geth --datadir ./data console
~~~

~~~shell
INFO [12-11|14:08:41.714] Maximum peer count                       ETH=25 LES=0 total=25
INFO [12-11|14:08:41.727] Starting peer-to-peer node               instance=Geth/v1.8.18-stable/darwin-amd64/go1.11.2
INFO [12-11|14:08:41.727] Allocated cache and file handles         database=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data/geth/chaindata cache=768 handles=128
INFO [12-11|14:08:41.752] Initialised chain configuration          config="{ChainID: 1979 Homestead: 0 DAO: <nil> DAOSupport: false EIP150: <nil> EIP155: 0 EIP158: 0 Byzantium: <nil> Constantinople: <nil> Engine: unknown}"
INFO [12-11|14:08:41.752] Disk storage enabled for ethash caches   dir=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data/geth/ethash count=3
INFO [12-11|14:08:41.752] Disk storage enabled for ethash DAGs     dir=/Users/haimhuan/.ethash                                             count=2
INFO [12-11|14:08:41.752] Initialising Ethereum protocol           versions="[63 62]" network=1
INFO [12-11|14:08:41.754] Loaded most recent local header          number=62 hash=446750…0da892 td=8243079 age=20m6s
INFO [12-11|14:08:41.754] Loaded most recent local full block      number=62 hash=446750…0da892 td=8243079 age=20m6s
INFO [12-11|14:08:41.754] Loaded most recent local fast block      number=62 hash=446750…0da892 td=8243079 age=20m6s
INFO [12-11|14:08:41.755] Loaded local transaction journal         transactions=0 dropped=0
INFO [12-11|14:08:41.756] Regenerated local transaction journal    transactions=0 accounts=0
WARN [12-11|14:08:41.756] Blockchain not empty, fast sync disabled 
INFO [12-11|14:08:41.858] New local node record                    seq=2 id=a43b2462bbfaa4e8 ip=127.0.0.1 udp=30303 tcp=30303
INFO [12-11|14:08:41.858] Started P2P networking                   self=enode://30ed193e7bf6327ef3f2b060875c08d6e88d8e5a3bf4c82abc6ed568d080dbe9eff4b7c55ff1ab88b70e09cfff56a414bcf1138129b86ab22b01a857841f300e@127.0.0.1:30303
INFO [12-11|14:08:41.861] IPC endpoint opened                      url=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data/geth.ipc
Welcome to the Geth JavaScript console!

instance: Geth/v1.8.18-stable/darwin-amd64/go1.11.2
INFO [12-11|14:08:41.973] Etherbase automatically configured       address=0x5bF9178861A5Fecd9F7AF0a1145e7C893402ca10
coinbase: 0x5bf9178861a5fecd9f7af0a1145e7c893402ca10
at block: 62 (Tue, 11 Dec 2018 13:48:35 CST)
 datadir: /Users/haimhuan/workspace/EthereumLab/AjonbinChain/data
 modules: admin:1.0 debug:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0
~~~

### Send Ether ###

#### Unlock Account ####

~~~shell
> eth.sendTransaction({from:eth.accounts[0],to:eth.accounts[1],value:web3.toWei("0.01","ether")})
Error: authentication needed: password or unlock
    at web3.js:3143:20
    at web3.js:6347:15
    at web3.js:5081:36
    at <anonymous>:1:1
~~~

* Need to unlock account first
* "123456" is the password of account

~~~shell
> personal.unlockAccount(eth.accounts[0],"123456")
true
~~~

#### New Transaction to Send Ether ####

~~~shell
> web3.fromWei(eth.getBalance(eth.accounts[0]))
310
> web3.fromWei(eth.getBalance(eth.accounts[1]))
0
> eth.sendTransaction({from:eth.accounts[0],to:eth.accounts[1],value:web3.toWei("0.01","ether")})
INFO [12-11|14:19:01.588] Setting new local account                address=0x5bF9178861A5Fecd9F7AF0a1145e7C893402ca10
INFO [12-11|14:19:01.589] Submitted transaction                    fullhash=0x0718c331a9288e7c7ee45be65297c4443ba38ac6d3e193eb50e378b092eb296f recipient=0x2C78ad8Dc25AA31BEB9ADF696B4A0c9544f865CD
"0x0718c331a9288e7c7ee45be65297c4443ba38ac6d3e193eb50e378b092eb296f"
> web3.fromWei(eth.getBalance(eth.accounts[1]))
0
~~~~

* sendTranasaction returns the transaction id ("0x0718c331a9288e7c7ee45be65297c4443ba38ac6d3e193eb50e378b092eb296f")
* After sendTransaction, the balance of account[1] is still 0 because the transaction has not been add to block (not mined yet)

#### Start Mining For New Transaction ####

~~~shell
> miner.start()
INFO [12-11|14:21:39.876] Updated mining threads                   threads=8
INFO [12-11|14:21:39.876] Transaction pool price threshold updated price=1000000000
null
> INFO [12-11|14:21:39.876] Commit new mining work                   number=63 sealhash=445c9e…794772 uncles=0 txs=0 gas=0 fees=0 elapsed=194.406µs
INFO [12-11|14:21:39.877] Commit new mining work                   number=63 sealhash=9d4ff7…6db12b uncles=0 txs=1 gas=21000 fees=2.1e-05 elapsed=552.083µs
INFO [12-11|14:21:41.801] Successfully sealed new block            number=63 sealhash=9d4ff7…6db12b hash=039e41…634cbd elapsed=1.925s
INFO [12-11|14:21:41.801] 🔨 mined potential block                  number=63 hash=039e41…634cbd
INFO [12-11|14:21:41.801] Commit new mining work                   number=64 sealhash=1cf42f…a23809 uncles=0 txs=0 gas=0     fees=0       elapsed=143.097µs
INFO [12-11|14:21:42.115] Successfully sealed new block            number=64 sealhash=1cf42f…a23809 hash=9023e0…481b00 elapsed=313.624ms
INFO [12-11|14:21:42.115] 🔨 mined potential block                  number=64 hash=9023e0…481b00
INFO [12-11|14:21:42.115] Commit new mining work                   number=65 sealhash=bb6337…38373c uncles=0 txs=0 gas=0     fees=0       elapsed=108.768µs
INFO [12-11|14:21:43.722] Successfully sealed new block            number=65 sealhash=bb6337…38373c hash=dc576b…3fc193 elapsed=1.606s
INFO [12-11|14:21:43.722] 🔨 mined potential block                  number=65 hash=dc576b…3fc193
INFO [12-11|14:21:43.722] Commit new mining work                   number=66 sealhash=00b79e…0bc3b0 uncles=0 txs=0 gas=0     fees=0       elapsed=175.033µs
INFO [12-11|14:21:43.851] Successfully sealed new block            number=66 sealhash=00b79e…0bc3b0 hash=f835d5…699745 elapsed=129.510ms
INFO [12-11|14:21:43.851] 🔨 mined potential block                  number=66 hash=f835d5…699745
INFO [12-11|14:21:43.852] Commit new mining work                   number=67 sealhash=414733…0781cd uncles=0 txs=0 gas=0     fees=0       elapsed=138.17µs
INFO [12-11|14:21:44.913] Successfully sealed new block            number=67 sealhash=414733…0781cd hash=fa1e6a…8172fe elapsed=1.061s
INFO [12-11|14:21:44.913] 🔨 mined potential block                  number=67 hash=fa1e6a…8172fe
INFO [12-11|14:21:44.913] Commit new mining work                   number=68 sealhash=c09ea2…e71517 uncles=0 txs=0 gas=0     fees=0       elapsed=134.712µs
INFO [12-11|14:21:45.561] Successfully sealed new block            number=68 sealhash=c09ea2…e71517 hash=19d4f6…562426 elapsed=647.868ms
INFO [12-11|14:21:45.561] 🔨 mined potential block                  number=68 hash=19d4f6…562426
INFO [12-11|14:21:45.561] Commit new mining work                   number=69 sealhash=472f6e…80dcb7 uncles=0 txs=0 gas=0     fees=0       elapsed=137.388µs
INFO [12-11|14:21:46.075] Successfully sealed new block            number=69 sealhash=472f6e…80dcb7 hash=1d62a6…9534ef elapsed=514.437ms
INFO [12-11|14:21:46.075] 🔨 mined potential block                  number=69 hash=1d62a6…9534ef
INFO [12-11|14:21:46.076] Commit new mining work                   number=70 sealhash=e52e58…cfb68e uncles=0 txs=0 gas=0     fees=0       elapsed=170.451µs
INFO [12-11|14:21:46.255] Successfully sealed new block            number=70 sealhash=e52e58…cfb68e hash=ea2df7…b4c39a elapsed=179.767ms
INFO [12-11|14:21:46.255] 🔗 block reached canonical chain          number=63 hash=039e41…634cbd
INFO [12-11|14:21:46.256] 🔨 mined potential block                  number=70 hash=ea2df7…b4c39a
INFO [12-11|14:21:46.256] Mining too far in the future             wait=2s
> INFO [12-11|14:21:48.258] Commit new mining work                   number=71 sealhash=dcd96e…51991e uncles=0 txs=0 gas=0     fees=0       elapsed=2.002s
INFO [12-11|14:21:48.277] Successfully sealed new block            number=71 sealhash=dcd96e…51991e hash=53d8a9…5c16bb elapsed=18.768ms
INFO [12-11|14:21:48.277] 🔗 block reached canonical chain          number=64 hash=9023e0…481b00
INFO [12-11|14:21:48.277] 🔨 mined potential block                  number=71 hash=53d8a9…5c16bb
INFO [12-11|14:21:48.278] Commit new mining work                   number=72 sealhash=7cfed4…b06e46 uncles=0 txs=0 gas=0     fees=0       elapsed=186.477µs
> miner.stop()
null
> eth.blockNumber
71
~~~

#### Check Transaction and Block Info ####

~~~shell
> eth.getTransaction("0x0718c331a9288e7c7ee45be65297c4443ba38ac6d3e193eb50e378b092eb296f")
~~~

~~~json
{
  blockHash: "0x039e4117806a467a8824fbbe485f321d9f8232d790eb81e2ea30b36f9f634cbd",
  blockNumber: 63,
  from: "0x5bf9178861a5fecd9f7af0a1145e7c893402ca10",
  gas: 90000,
  gasPrice: 1000000000,
  hash: "0x0718c331a9288e7c7ee45be65297c4443ba38ac6d3e193eb50e378b092eb296f",
  input: "0x",
  nonce: 0,
  r: "0xf5ca025752b96f82fdf69ba5a83b22800eb161a5b35af70dc552b16229c6f823",
  s: "0x4985e89e4b01d64b0c0764ea0dd58c73578e075edd5921b664aa2d6b8da175b6",
  to: "0x2c78ad8dc25aa31beb9adf696b4a0c9544f865cd",
  transactionIndex: 0,
  v: "0xf99",
  value: 10000000000000000
}
~~~

~~~shell
> eth.getBlock("0x039e4117806a467a8824fbbe485f321d9f8232d790eb81e2ea30b36f9f634cbd")
~~~

~~~json
{
  difficulty: 131072,
  extraData: "0xd983010812846765746888676f312e31312e328664617277696e",
  gasLimit: 2233089,
  gasUsed: 21000,
  hash: "0x039e4117806a467a8824fbbe485f321d9f8232d790eb81e2ea30b36f9f634cbd",
  logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  miner: "0x5bf9178861a5fecd9f7af0a1145e7c893402ca10",
  mixHash: "0xab554a908694f67612f21ee70787f15548895fc48bb13972fc06ee23b0bee741",
  nonce: "0x1f3da5ace9e221a0",
  number: 63,
  parentHash: "0x44675067e8d48ffae1681230a66d794e694efb1c22327e442267766f160da892",
  receiptsRoot: "0xfc907ad2521cafbec4c92eedee21f53f9485b59f6d74410861544261c4b8a734",
  sha3Uncles: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  size: 651,
  stateRoot: "0x2e4240927c87ca93bef524bcea7d81c702fd3136cadabc240b2e006bc03c92b1",
  timestamp: 1544509299,
  totalDifficulty: 8374151,
  transactions: ["0x0718c331a9288e7c7ee45be65297c4443ba38ac6d3e193eb50e378b092eb296f"],
  transactionsRoot: "0x9f5b154ae6cf8de666743d6a3d292bae7c9c1777d1da3d98cc4d584892e4fabe",
  uncles: []
}
~~~


## Ethererum Node ##

### Check node info ###

~~~shell
HAIMHUAN-M-40YV:AjonbinChain haimhuan$ geth --datadir ./data console
> admin.nodeInfo
~~~

~~~json
{
  enode: "enode://30ed193e7bf6327ef3f2b060875c08d6e88d8e5a3bf4c82abc6ed568d080dbe9eff4b7c55ff1ab88b70e09cfff56a414bcf1138129b86ab22b01a857841f300e@127.0.0.1:30303",
  enr: "0xf89cb84088bfd66de60c5f87b240d43101fe4b680b9c016172077e5344e4fe07cecbfcb534f15efca89c380a6fe8f3e8d53af51766d0d32334e81c0a434635217a122da70383636170ccc5836574683ec5836574683f826964827634826970847f00000189736563703235366b31a10230ed193e7bf6327ef3f2b060875c08d6e88d8e5a3bf4c82abc6ed568d080dbe98374637082765f8375647082765f",
  id: "a43b2462bbfaa4e8383c30c2d3e0d170462dfa5266a039205bbf0a31b41951b7",
  ip: "127.0.0.1",
  listenAddr: "[::]:30303",
  name: "Geth/v1.8.18-stable/darwin-amd64/go1.11.2",
  ports: {
    discovery: 30303,
    listener: 30303
  },
  protocols: {
    eth: {
      config: {
        chainId: 1979,
        eip150Hash: "0x0000000000000000000000000000000000000000000000000000000000000000",
        eip155Block: 0,
        eip158Block: 0,
        homesteadBlock: 0
      },
      difficulty: 9425031,
      genesis: "0x7c037e2f4786d1648fed88d60e358f228a1ee94b3ee470ec87f5b96fca178913",
      head: "0x53d8a910300785c1ae068501ef5bc4934afc29d2343eb4ee20f7ee086a5c16bb",
      network: 1
    }
  }
}
~~~

### Create a New Node ###

1. Run a new Terminal
    * Specify a new datadir
    * With same genesis.json

~~~shell
$ geth --datadir ./data_node2 init genesis.json
~~~

~~~shell
INFO [12-11|14:41:09.975] Maximum peer count                       ETH=25 LES=0 total=25
INFO [12-11|14:41:09.983] Allocated cache and file handles         database=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data_node2/geth/chaindata cache=16 handles=16
INFO [12-11|14:41:09.989] Writing custom genesis block 
INFO [12-11|14:41:09.989] Persisted trie from memory database      nodes=0 size=0.00B time=10.87µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [12-11|14:41:09.990] Successfully wrote genesis state         database=chaindata                                                                    hash=7c037e…178913
INFO [12-11|14:41:09.990] Allocated cache and file handles         database=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data_node2/geth/lightchaindata cache=16 handles=16
INFO [12-11|14:41:09.995] Writing custom genesis block 
INFO [12-11|14:41:09.996] Persisted trie from memory database      nodes=0 size=0.00B time=2.353µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [12-11|14:41:09.996] Successfully wrote genesis state         database=lightchaindata   
~~~

2. Create new Node
    * Must change the port, because default port has been used by first node
    * Must set networkid

~~~shell
$geth --datadir data_node2 --networkid 1979 --port 30306 --nodiscover console
~~~

~~~shell
INFO [12-11|14:43:12.475] Maximum peer count                       ETH=25 LES=0 total=25
INFO [12-11|14:43:12.486] Starting peer-to-peer node               instance=Geth/v1.8.18-stable/darwin-amd64/go1.11.2
INFO [12-11|14:43:12.486] Allocated cache and file handles         database=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data_node2/geth/chaindata cache=768 handles=128
INFO [12-11|14:43:12.503] Initialised chain configuration          config="{ChainID: 1979 Homestead: 0 DAO: <nil> DAOSupport: false EIP150: <nil> EIP155: 0 EIP158: 0 Byzantium: <nil> Constantinople: <nil> Engine: unknown}"
INFO [12-11|14:43:12.503] Disk storage enabled for ethash caches   dir=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data_node2/geth/ethash count=3
INFO [12-11|14:43:12.503] Disk storage enabled for ethash DAGs     dir=/Users/haimhuan/.ethash                                                   count=2
INFO [12-11|14:43:12.503] Initialising Ethereum protocol           versions="[63 62]" network=1979
INFO [12-11|14:43:12.504] Loaded most recent local header          number=0 hash=7c037e…178913 td=64 age=49y7mo3w
INFO [12-11|14:43:12.504] Loaded most recent local full block      number=0 hash=7c037e…178913 td=64 age=49y7mo3w
INFO [12-11|14:43:12.504] Loaded most recent local fast block      number=0 hash=7c037e…178913 td=64 age=49y7mo3w
INFO [12-11|14:43:12.505] Regenerated local transaction journal    transactions=0 accounts=0
INFO [12-11|14:43:12.515] New local node record                    seq=1 id=145e04be9ab470e6 ip=127.0.0.1 udp=0 tcp=30306
INFO [12-11|14:43:12.515] Started P2P networking                   self="enode://c473723fdaac9a3bb5567ce33dbb507946ed718fbe3f48727588c157f9ef7ad6b5878d0e23c5b36b0ec88af7fc9cb286d626b312186ef673c5f5826a082b341c@127.0.0.1:30306?discport=0"
INFO [12-11|14:43:12.517] IPC endpoint opened                      url=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data_node2/geth.ipc
Welcome to the Geth JavaScript console!

instance: Geth/v1.8.18-stable/darwin-amd64/go1.11.2
 modules: admin:1.0 debug:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0
~~~

~~~shell
> admin.nodeInfo
~~~

~~~json
{
  enode: "enode://c473723fdaac9a3bb5567ce33dbb507946ed718fbe3f48727588c157f9ef7ad6b5878d0e23c5b36b0ec88af7fc9cb286d626b312186ef673c5f5826a082b341c@127.0.0.1:30306?discport=0",
  enr: "0xf88fb840144ff42581a838789b588ccaf6a531edb873a813dc7b11ccc60a42d975e1be4c7b19ee0d4d489912bf1c9caab178b42a4cf43dd3862eb22042139c63d91a6ad60183636170c6c5836574683f826964827634826970847f00000189736563703235366b31a102c473723fdaac9a3bb5567ce33dbb507946ed718fbe3f48727588c157f9ef7ad683746370827662",
  id: "145e04be9ab470e681d1ba9ee529acad6a5890476f8b1e1d9e3ea07b5511d177",
  ip: "127.0.0.1",
  listenAddr: "[::]:30306",
  name: "Geth/v1.8.18-stable/darwin-amd64/go1.11.2",
  ports: {
    discovery: 0,
    listener: 30306
  },
  protocols: {
    eth: {
      config: {
        chainId: 1979,
        eip150Hash: "0x0000000000000000000000000000000000000000000000000000000000000000",
        eip155Block: 0,
        eip158Block: 0,
        homesteadBlock: 0
      },
      difficulty: 64,
      genesis: "0x7c037e2f4786d1648fed88d60e358f228a1ee94b3ee470ec87f5b96fca178913",
      head: "0x7c037e2f4786d1648fed88d60e358f228a1ee94b3ee470ec87f5b96fca178913",
      network: 1979
    }
  }
}
> 
~~~

3. Add Node

* Start terminal of first node
* Must enable HTTP-RPC Server with --rpc/--rpcaddr/--rpcport
* After enable RPC, wallet(like MetaMask) can connect to this node

~~~shell
$geth --datadir ./data --networkid 1979 --rpc --rpcaddr 127.0.0.1 console
~~~

~~~shell
INFO [12-11|14:56:10.578] Maximum peer count                       ETH=25 LES=0 total=25
INFO [12-11|14:56:10.590] Starting peer-to-peer node               instance=Geth/v1.8.18-stable/darwin-amd64/go1.11.2
INFO [12-11|14:56:10.590] Allocated cache and file handles         database=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data/geth/chaindata cache=768 handles=128
INFO [12-11|14:56:10.610] Initialised chain configuration          config="{ChainID: 1979 Homestead: 0 DAO: <nil> DAOSupport: false EIP150: <nil> EIP155: 0 EIP158: 0 Byzantium: <nil> Constantinople: <nil> Engine: unknown}"
INFO [12-11|14:56:10.610] Disk storage enabled for ethash caches   dir=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data/geth/ethash count=3
INFO [12-11|14:56:10.610] Disk storage enabled for ethash DAGs     dir=/Users/haimhuan/.ethash                                             count=2
INFO [12-11|14:56:10.611] Initialising Ethereum protocol           versions="[63 62]" network=1979
INFO [12-11|14:56:10.613] Loaded most recent local header          number=71 hash=53d8a9…5c16bb td=9425031 age=34m22s
INFO [12-11|14:56:10.613] Loaded most recent local full block      number=71 hash=53d8a9…5c16bb td=9425031 age=34m22s
INFO [12-11|14:56:10.614] Loaded most recent local fast block      number=71 hash=53d8a9…5c16bb td=9425031 age=34m22s
INFO [12-11|14:56:10.615] Loaded local transaction journal         transactions=0 dropped=0
INFO [12-11|14:56:10.616] Regenerated local transaction journal    transactions=0 accounts=0
WARN [12-11|14:56:10.616] Blockchain not empty, fast sync disabled 
INFO [12-11|14:56:10.664] New local node record                    seq=6 id=a43b2462bbfaa4e8 ip=127.0.0.1 udp=30303 tcp=30303
INFO [12-11|14:56:10.665] Started P2P networking                   self=enode://30ed193e7bf6327ef3f2b060875c08d6e88d8e5a3bf4c82abc6ed568d080dbe9eff4b7c55ff1ab88b70e09cfff56a414bcf1138129b86ab22b01a857841f300e@127.0.0.1:30303
INFO [12-11|14:56:10.667] IPC endpoint opened                      url=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data/geth.ipc
INFO [12-11|14:56:10.668] HTTP endpoint opened                     url=http://127.0.0.1:8545                                            cors= vhosts=localhost
Welcome to the Geth JavaScript console!

instance: Geth/v1.8.18-stable/darwin-amd64/go1.11.2
INFO [12-11|14:56:10.770] Etherbase automatically configured       address=0x5bF9178861A5Fecd9F7AF0a1145e7C893402ca10
coinbase: 0x5bf9178861a5fecd9f7af0a1145e7c893402ca10
at block: 71 (Tue, 11 Dec 2018 14:21:48 CST)
 datadir: /Users/haimhuan/workspace/EthereumLab/AjonbinChain/data
 modules: admin:1.0 debug:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0
~~~~

* Start terminal of 2nd node

~~~shell
$ geth --datadir data_node2 --networkid 1979 --port 30306 --nodiscover console
~~~

~~~shell
INFO [12-11|14:56:56.995] Maximum peer count                       ETH=25 LES=0 total=25
INFO [12-11|14:56:57.005] Starting peer-to-peer node               instance=Geth/v1.8.18-stable/darwin-amd64/go1.11.2
INFO [12-11|14:56:57.006] Allocated cache and file handles         database=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data_node2/geth/chaindata cache=768 handles=128
INFO [12-11|14:56:57.022] Initialised chain configuration          config="{ChainID: 1979 Homestead: 0 DAO: <nil> DAOSupport: false EIP150: <nil> EIP155: 0 EIP158: 0 Byzantium: <nil> Constantinople: <nil> Engine: unknown}"
INFO [12-11|14:56:57.022] Disk storage enabled for ethash caches   dir=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data_node2/geth/ethash count=3
INFO [12-11|14:56:57.022] Disk storage enabled for ethash DAGs     dir=/Users/haimhuan/.ethash                                                   count=2
INFO [12-11|14:56:57.022] Initialising Ethereum protocol           versions="[63 62]" network=1979
INFO [12-11|14:56:57.025] Loaded most recent local header          number=0 hash=7c037e…178913 td=64 age=49y7mo3w
INFO [12-11|14:56:57.025] Loaded most recent local full block      number=0 hash=7c037e…178913 td=64 age=49y7mo3w
INFO [12-11|14:56:57.025] Loaded most recent local fast block      number=0 hash=7c037e…178913 td=64 age=49y7mo3w
INFO [12-11|14:56:57.026] Loaded local transaction journal         transactions=0 dropped=0
INFO [12-11|14:56:57.027] Regenerated local transaction journal    transactions=0 accounts=0
INFO [12-11|14:56:57.042] New local node record                    seq=3 id=145e04be9ab470e6 ip=127.0.0.1 udp=0 tcp=30306
INFO [12-11|14:56:57.042] Started P2P networking                   self="enode://c473723fdaac9a3bb5567ce33dbb507946ed718fbe3f48727588c157f9ef7ad6b5878d0e23c5b36b0ec88af7fc9cb286d626b312186ef673c5f5826a082b341c@127.0.0.1:30306?discport=0"
INFO [12-11|14:56:57.043] IPC endpoint opened                      url=/Users/haimhuan/workspace/EthereumLab/AjonbinChain/data_node2/geth.ipc
Welcome to the Geth JavaScript console!

instance: Geth/v1.8.18-stable/darwin-amd64/go1.11.2
 modules: admin:1.0 debug:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0
~~~

* In 1st terminal, add node

~~~json
> admin.addPeer("enode://c473723fdaac9a3bb5567ce33dbb507946ed718fbe3f48727588c157f9ef7ad6b5878d0e23c5b36b0ec88af7fc9cb286d626b312186ef673c5f5826a082b341c@127.0.0.1:30306")
true
> admin.peers
[{
    caps: ["eth/63"],
    enode: "enode://c473723fdaac9a3bb5567ce33dbb507946ed718fbe3f48727588c157f9ef7ad6b5878d0e23c5b36b0ec88af7fc9cb286d626b312186ef673c5f5826a082b341c@127.0.0.1:30306",
    id: "145e04be9ab470e681d1ba9ee529acad6a5890476f8b1e1d9e3ea07b5511d177",
    name: "Geth/v1.8.18-stable/darwin-amd64/go1.11.2",
    network: {
      inbound: false,
      localAddress: "127.0.0.1:58207",
      remoteAddress: "127.0.0.1:30306",
      static: true,
      trusted: false
    },
    protocols: {
      eth: {
        difficulty: 64,
        head: "0x7c037e2f4786d1648fed88d60e358f228a1ee94b3ee470ec87f5b96fca178913",
        version: 63
      }
    }
}]
> 
~~~

* When addPeer() call, you can see log info in 2nd terminal

~~~json
> INFO [12-11|14:57:07.046] Block synchronisation started 
INFO [12-11|14:57:07.054] Imported new state entries               count=3 elapsed=67.39µs processed=3 pending=0 retry=0 duplicate=0 unexpected=0
INFO [12-11|14:57:07.969] Imported new block headers               count=69 elapsed=914.118ms number=69 hash=1d62a6…9534ef age=35m21s
INFO [12-11|14:57:07.972] Imported new block receipts              count=6  elapsed=129.077µs number=6  hash=a4ada0…eac23d age=1h11m18s size=24.00B
WARN [12-11|14:57:07.972] Node data write error                    err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"
WARN [12-11|14:57:07.975] Rolled back headers                      count=69 header=69->0 fast=6->0 block=0->0
WARN [12-11|14:57:07.975] Synchronisation failed, retrying         err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"
INFO [12-11|14:57:17.048] Imported new block headers               count=0  elapsed=1.818ms   number=69 hash=1d62a6…9534ef age=35m31s   ignored=69
INFO [12-11|14:57:17.051] Imported new block receipts              count=0  elapsed=56.42µs   number=6  hash=a4ada0…eac23d age=1h11m28s size=0.00B  ignored=6
WARN [12-11|14:57:17.051] Node data write error                    err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"
WARN [12-11|14:57:17.051] Synchronisation failed, retrying         err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"

> 
> INFO [12-11|14:57:27.050] Imported new block headers               count=0  elapsed=1.843ms   number=69 hash=1d62a6…9534ef age=35m41s   ignored=69
INFO [12-11|14:57:27.053] Imported new block receipts              count=0  elapsed=19.242µs  number=6  hash=a4ada0…eac23d age=1h11m38s size=0.00B  ignored=6
WARN [12-11|14:57:27.053] Node data write error                    err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"
WARN [12-11|14:57:27.054] Synchronisation failed, retrying         err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"
INFO [12-11|14:57:37.049] Imported new block headers               count=0  elapsed=1.526ms   number=69 hash=1d62a6…9534ef age=35m51s   ignored=69
INFO [12-11|14:57:37.051] Imported new block receipts              count=0  elapsed=20.866µs  number=6  hash=a4ada0…eac23d age=1h11m48s size=0.00B  ignored=6
WARN [12-11|14:57:37.052] Node data write error                    err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"
WARN [12-11|14:57:37.052] Synchronisation failed, retrying         err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"
INFO [12-11|14:57:47.051] Imported new block headers               count=0  elapsed=1.731ms   number=69 hash=1d62a6…9534ef age=36m1s    ignored=69
INFO [12-11|14:57:47.053] Imported new block receipts              count=0  elapsed=19.101µs  number=6  hash=a4ada0…eac23d age=1h11m58s size=0.00B  ignored=6
WARN [12-11|14:57:47.054] Node data write error                    err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"
WARN [12-11|14:57:47.054] Synchronisation failed, retrying         err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"
INFO [12-11|14:57:57.052] Imported new block headers               count=0  elapsed=2.538ms   number=69 hash=1d62a6…9534ef age=36m11s   ignored=69
INFO [12-11|14:57:57.055] Imported new block receipts              count=0  elapsed=26.97µs   number=6  hash=a4ada0…eac23d age=1h12m8s  size=0.00B  ignored=6
WARN [12-11|14:57:57.055] Node data write error                    err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"
WARN [12-11|14:57:57.055] Synchronisation failed, retrying         err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"
INFO [12-11|14:58:07.055] Imported new block headers               count=0  elapsed=1.912ms   number=69 hash=1d62a6…9534ef age=36m21s   ignored=69
INFO [12-11|14:58:07.057] Imported new block receipts              count=0  elapsed=31.969µs  number=6  hash=a4ada0…eac23d age=1h12m18s size=0.00B  ignored=6
WARN [12-11|14:58:07.058] Node data write error                    err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"
WARN [12-11|14:58:07.058] Synchronisation failed, retrying         err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"
INFO [12-11|14:58:17.047] Imported new block headers               count=0  elapsed=1.199ms   number=69 hash=1d62a6…9534ef age=36m31s   ignored=69
INFO [12-11|14:58:17.048] Imported new block receipts              count=0  elapsed=14.3µs    number=6  hash=a4ada0…eac23d age=1h12m28s size=0.00B  ignored=6
WARN [12-11|14:58:17.049] Node data write error                    err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"
WARN [12-11|14:58:17.049] Synchronisation failed, retrying         err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"
INFO [12-11|14:58:27.042] Imported new block headers               count=0  elapsed=1.314ms   number=69 hash=1d62a6…9534ef age=36m41s   ignored=69
INFO [12-11|14:58:27.044] Imported new block receipts              count=0  elapsed=16.131µs  number=6  hash=a4ada0…eac23d age=1h12m38s size=0.00B  ignored=6
WARN [12-11|14:58:27.044] Node data write error                    err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"
WARN [12-11|14:58:27.044] Synchronisation failed, retrying         err="state node b733ba…d10614 failed with all peers (1 tries, 1 peers)"

~~~